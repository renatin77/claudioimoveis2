const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "..", "public", "images");
const MAX_WIDTH = 1200;
const QUALITY = 75;

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".webp", ".jpeg", ".jpg", ".png"].includes(ext)) return;

  const stat = fs.statSync(filePath);
  const sizeMB = stat.size / (1024 * 1024);
  if (sizeMB < 0.3) return;

  const buffer = fs.readFileSync(filePath);

  try {
    const resized = sharp(buffer)
      .resize(MAX_WIDTH, null, { withoutEnlargement: true })
      .webp({ quality: QUALITY });

    const outputBuffer = await resized.toBuffer();

    if (outputBuffer.length < stat.size) {
      const newPath = filePath.replace(/\.(jpeg|jpg|png)$/i, ".webp");
      const finalPath = ext === ".webp" ? filePath : newPath;

      fs.writeFileSync(finalPath, outputBuffer);

      if (finalPath !== filePath) {
        fs.unlinkSync(filePath);
      }

      const newSizeMB = outputBuffer.length / (1024 * 1024);
      const savings = Math.round((1 - outputBuffer.length / stat.size) * 100);
      console.log(
        `${path.basename(filePath)}: ${sizeMB.toFixed(2)}MB → ${newSizeMB.toFixed(2)}MB (${savings}% menor)`
      );

      if (finalPath !== filePath) {
        return { old: filePath, new: finalPath };
      }
    }
  } catch (e) {
    console.error(`Error: ${path.basename(filePath)}: ${e.message}`);
  }
  return null;
}

async function walk(dir) {
  const renames = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      renames.push(...(await walk(filePath)));
    } else {
      const result = await optimizeImage(filePath);
      if (result) renames.push(result);
    }
  }
  return renames;
}

(async () => {
  console.log("Otimizando imagens...\n");
  const renames = await walk(IMAGES_DIR);
  console.log(`\nConcluido! ${renames.length} arquivos renomeados (jpeg/jpg/png → webp)`);
  if (renames.length > 0) {
    console.log("\nRenomeacoes:");
    renames.forEach((r) => console.log(`  ${path.basename(r.old)} → ${path.basename(r.new)}`));
  }
})();
