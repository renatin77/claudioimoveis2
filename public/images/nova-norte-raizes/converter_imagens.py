import os
from PIL import Image
import shutil

# Pega automaticamente a pasta onde o script está salvo
diretorio_atual = os.path.dirname(os.path.abspath(__file__))
print(f"Iniciando limpeza e conversão na pasta: {diretorio_atual}")

contador_convertidos = 0
contador_movidos = 0

# os.walk percorre a pasta atual e todas as subpastas
for root, dirs, files in os.walk(diretorio_atual):
    # Ignora a pasta raiz (só processa subpastas)
    if root == diretorio_atual:
        continue

    for file in files:
        caminho_completo = os.path.join(root, file)
        nome_sem_extensao = os.path.splitext(file)[0]

        # --- Caso 1: Arquivo JPG → Converte para WebP e MOVE o original ---
        if file.lower().endswith('.jpg'):
            caminho_saida_webp = os.path.join(diretorio_atual, f"{nome_sem_extensao}.webp")
            try:
                with Image.open(caminho_completo) as img:
                    img.save(caminho_saida_webp, "webp", quality=100)

                # Move (deleta) o JPG original da subpasta
                os.remove(caminho_completo)

                print(f"Convertido e removido: {file} -> {nome_sem_extensao}.webp")
                contador_convertidos += 1

            except Exception as e:
                print(f"Erro ao processar {file}: {e}")

        # --- Caso 2: Arquivo WebP já existente → MOVE para a raiz ---
        elif file.lower().endswith('.webp'):
            caminho_destino = os.path.join(diretorio_atual, file)

            try:
                shutil.move(caminho_completo, caminho_destino)
                print(f"WebP movido: {file}")
                contador_movidos += 1

            except Exception as e:
                print(f"Erro ao mover {file}: {e}")

print(f"\n--- Finalizado! ---")
print(f"JPGs convertidos para WebP: {contador_convertidos}")
print(f"WebPs já existentes movidos: {contador_movidos}")
print(f"Total de arquivos processados: {contador_convertidos + contador_movidos}")
