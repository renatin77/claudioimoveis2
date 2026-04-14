# Claudio Corretor — Site Imobiliário

Site de marketing imobiliário para o corretor Cláudio (CRECI 103666), especialista em empreendimentos da Cury Construtora pelo programa **Minha Casa Minha Vida** no Rio de Janeiro.

---

## Tecnologias Usadas

| Tecnologia | O que faz |
|---|---|
| **Next.js 14** | Framework React que cria as páginas do site. Usa o App Router (sistema de rotas baseado em pastas) |
| **React 18** | Biblioteca para construir interfaces com componentes reutilizáveis |
| **TypeScript** | JavaScript com tipos — ajuda a evitar erros, o código "conversa" com o editor e mostra os problemas antes de rodar |
| **Tailwind CSS** | Framework CSS onde você estila direto no HTML com classes como `text-gold`, `p-6`, `rounded-2xl` |
| **Framer Motion** | Biblioteca de animação para React — usada nos menus, transições e micro-interações |
| **Lucide React** | Biblioteca de ícones (MapPin, BedDouble, MessageCircle, etc.) |
| **next-themes** | Plugin para alternar entre modo claro e escuro |
| **Sharp** | Biblioteca de processamento de imagens (usada no script de otimização, não no site) |

---

## Como Rodar o Projeto

```bash
# Instalar as dependências
npm install

# Rodar em modo desenvolvimento (abre em localhost:3000)
npm run dev

# Criar a versão de produção
npm run build

# Rodar a versão de produção localmente
npm start
```

---

## Estrutura de Pastas

```
cury-imoveis/
├── public/                     # Arquivos estáticos (imagens, favicon)
│   └── images/                 # Fotos dos empreendimentos e do corretor
│       ├── candeeiro/          # Fotos do Condomínio Candeeiro
│       ├── cartola/            # Fotos do Residencial Cartola
│       ├── cartola-ii/         # Fotos do Residencial Cartola II
│       ├── condominio-rosa/    # Fotos do Condomínio Rosa (Pixinguinha)
│       ├── corretor.webp       # Foto do corretor Cláudio
│       ├── farol-guanabara/    # Fotos do Farol da Guanabara
│       ├── lamparina/          # Fotos do Condomínio Lamparina
│       └── parque-piedade/     # Fotos do Parque Piedade (Aquarela)
│
├── scripts/
│   └── optimize-images.js      # Script que converte e comprime imagens para WebP
│
├── src/
│   ├── app/                    # PÁGINAS DO SITE (Next.js App Router)
│   │   ├── layout.tsx          # Layout raiz — envolve TODAS as páginas (Header + Footer + tema)
│   │   ├── page.tsx            # Página inicial (Home)
│   │   ├── not-found.tsx       # Página 404 (imóvel não encontrado)
│   │   ├── globals.css         # Estilos globais (variáveis CSS, glass morphism, animações)
│   │   ├── contato/
│   │   │   └── page.tsx        # Página de Contato com formulário
│   │   └── imovel/
│   │       └── [slug]/
│   │           └── page.tsx    # Página de detalhe de cada imóvel (rota dinâmica)
│   │
│   ├── components/             # COMPONENTES REUTILIZÁVEIS
│   │   ├── Header.tsx          # Barra de navegação fixa no topo
│   │   ├── Footer.tsx          # Rodapé com links e contatos
│   │   ├── ThemeProvider.tsx   # Provedor do tema claro/escuro
│   │   │
│   │   ├── home/               # Componentes da página inicial
│   │   │   ├── HeroSection.tsx      # Banner principal com foto de fundo
│   │   │   ├── PropertyGrid.tsx     # Grid com os cards de todos os imóveis
│   │   │   ├── PropertyCard.tsx     # Card individual de cada imóvel
│   │   │   ├── AboutBroker.tsx      # Seção "Seu Corretor" com foto e info
│   │   │   └── CTASection.tsx       # Banner final "Realize o sonho"
│   │   │
│   │   ├── property/           # Componentes da página de imóvel
│   │   │   ├── PropertyPageContent.tsx  # Monta a página inteira do imóvel
│   │   │   ├── PropertyHero.tsx         # Banner principal do imóvel
│   │   │   ├── Gallery.tsx             # Galeria de fotos com lightbox
│   │   │   ├── PropertyDetails.tsx     # Info: quartos, bairro, status, zona
│   │   │   ├── Diferenciais.tsx        # Tags dos itens de lazer
│   │   │   ├── Plantas.tsx             # Galeria de plantas com lightbox
│   │   │   ├── Location.tsx            # Mapa + endereços + links Waze/Google
│   │   │   └── WhatsAppFloat.tsx       # Botão flutuante do WhatsApp
│   │   │
│   │   └── ui/                 # Componentes base (primitivos)
│   │       ├── CTAButton.tsx         # Botão de ação (link, botão, ou externo)
│   │       ├── GlassCard.tsx         # Card com efeito glass morphism
│   │       ├── ScrollReveal.tsx      # Animação de entrada ao rolar a página
│   │       ├── ThemeToggle.tsx       # Botão sol/lua para trocar tema
│   │       └── ParallaxImage.tsx     # Efeito parallax em imagens (não usado atualmente)
│   │
│   └── data/                   # DADOS DO SITE (sem banco de dados)
│       ├── broker.ts            # Dados do corretor (nome, CRECI, WhatsApp, email, Instagram)
│       └── properties.ts       # Dados dos 7 empreendimentos (tudo que aparece no site)
│
├── next.config.mjs             # Configuração do Next.js (otimização de imagens)
├── tailwind.config.ts          # Configuração do Tailwind (cores, fontes, animações)
├── tsconfig.json               # Configuração do TypeScript
├── postcss.config.mjs          # Configuração do PostCSS (processa o Tailwind)
└── package.json                # Lista de dependências e scripts do projeto
```

---

## O que cada arquivo faz (explicado em detalhes)

### Páginas (`src/app/`)

#### `layout.tsx` — O esqueleto do site
Toda página do site passa por este arquivo. Ele:
- Importa as fontes do Google: **Inter** (texto normal) e **Playfair Display** (títulos elegantes)
- Coloca o `<html>` com `lang="pt-BR"` (site em português)
- Envolve tudo no `ThemeProvider` (para o tema escuro funcionar)
- Renderiza o `Header` no topo e o `Footer` no final de TODAS as páginas
- Gera as meta tags de SEO (título, descrição, palavras-chave) automaticamente

#### `page.tsx` — A Home
Monta a página inicial juntando 4 seções na ordem:
1. `HeroSection` — o banner grande do topo
2. `PropertyGrid` — os cards dos imóveis
3. `AboutBroker` — a seção do corretor
4. `CTASection` — o banner final

Este é um **Server Component** (roda só no servidor, não precisa de JavaScript no navegador para mostrar o conteúdo).

#### `contato/page.tsx` — Página de Contato
Tem um formulário com 5 campos (nome, telefone, email, imóvel de interesse, mensagem). Quando a pessoa clica em "Enviar via WhatsApp", o site monta uma mensagem e abre o WhatsApp do corretor com ela — não envia email, tudo vai pro WhatsApp. Na lateral mostra as info do corretor, links de contato e o endereço do stand de vendas.

#### `imovel/[slug]/page.tsx` — Página de cada imóvel
A pasta `[slug]` é uma **rota dinâmica**: o `slug` é o identificador do imóvel na URL (ex: `/imovel/parque-piedade`). Este arquivo:
- `generateStaticParams()`: na hora do build, o Next.js cria 7 páginas HTML estáticas (uma pra cada imóvel). Isso faz o site carregar muito rápido
- `generateMetadata()`: gera título e descrição específicos de cada imóvel para o Google
- Se o slug não existe, mostra a página 404
- Renderiza o `PropertyPageContent` com os dados daquele imóvel

#### `not-found.tsx` — Página 404
Aparece quando alguém tenta acessar um imóvel que não existe. Mostra "Imóvel não encontrado" e um botão pra voltar pra home.

#### `globals.css` — Todo o design system
Este arquivo define o visual do site inteiro através de **variáveis CSS**:

- **Cores**: `--background` e `--foreground` mudam entre claro/escuro. `--gold` (#c9a96e) é a cor dourada de destaque
- **Glass morphism**: `.glass` aplica fundo semi-transparente + blur + borda sutil + sombra. `.glass-hover` adiciona leve aumento e borda dourada ao passar o mouse. `.gold-glow` coloca uma sombra dourada brilhante
- **Scroll reveal**: `.scroll-reveal` começa invisível (`opacity: 0`) com um deslocamento. Quando a classe `.is-visible` é adicionada (pelo JavaScript do componente `ScrollReveal`), o elemento aparece suavemente
- **Acessibilidade**: `@media (prefers-reduced-motion: reduce)` desabilita TODAS as animações pra quem configura o navegador pra reduzir movimento

---

### Componentes da Home (`src/components/home/`)

#### `HeroSection.tsx` — O banner principal
Ocupa a tela inteira (`h-screen`). Tem:
- Uma foto de fundo (Parque Piedade) usando o componente `<Image>` do Next.js com `priority` (carrega primeiro)
- Uma camada escura por cima (`bg-black/60`) pra dar contraste com o texto
- Texto animado com Framer Motion: badge "Minha Casa Minha Vida", título "Seu novo lar, parcelas que cabem no seu bolso", subtítulo
- Dois botões: "Ver Imóveis" (vai pra seção dos cards) e "Fazer Orçamento" (abre WhatsApp)
- Uma setinha pulsante embaixo indicando pra rolar

#### `PropertyGrid.tsx` — Grid de imóveis
Busca todos os imóveis do arquivo `properties.ts` e cria um card pra cada. O grid é responsivo: 1 coluna no celular, 2 no tablet, 3 no desktop. Cada card aparece com um leve atraso (`delay: index * 50ms`) criando um efeito cascata.

#### `PropertyCard.tsx` — Card de um imóvel
Cada card é um link pra página do imóvel. Mostra:
- Foto do imóvel com gradiente escuro embaixo
- Badge de status ("Lançamento" em fundo dourado, outros em texto dourado)
- Nome do empreendimento e bairro
- Subtítulo, quantidade de quartos
- "Saiba mais" com seta

O card inteiro é clicável e usa `GlassCard` com efeito hover.

#### `AboutBroker.tsx` — Seção do corretor
Layout de 2 colunas. Na esquerda: nome, CRECI, descrição, 3 mini-cards (Minha Casa Minha Vida / Cury Construtora / Atendimento WhatsApp) e botão de orçamento. Na direita: foto do corretor num card quadrado com um badge flutuante "7 Imóveis MCMV".

#### `CTASection.tsx` — Banner final
Um banner com fundo dourado translúcido que diz "Realize o sonho da casa própria" com dois botões: WhatsApp e ver imóveis. Serve como último "empurrãozinho" antes do rodapé.

---

### Componentes de Imóvel (`src/components/property/`)

#### `PropertyPageContent.tsx` — Orquestrador
Monta a página completa do imóvel chamando os componentes na ordem: Hero → Galeria → Detalhes → Diferenciais → Plantas → Localização. Depois mostra um CTA com WhatsApp e o texto legal da incorporadora. Por fim, o botão flutuante de WhatsApp.

#### `PropertyHero.tsx` — Banner do imóvel
Similar ao Hero da home mas menor (70vh). Mostra a foto principal com gradiente, nome do imóvel, bairro, quantidade de quartos, badge de status e zona. Tem link "Voltar" pra home.

#### `Gallery.tsx` — Galeria de fotos
Mostra até 6 fotos inicialmente num grid. Botão "Ver todas as N fotos" expande pra mostrar tudo. Ao clicar numa foto, abre um **lightbox** (tela cheia escura) com navegação entre fotos (anterior/próximo). Tudo animado com Framer Motion.

#### `PropertyDetails.tsx` — Informações do imóvel
4 cards em linha: quartos (ícone cama), bairro (ícone mapa), status (ícone prédio), zona (ícone localização). Embaixo: descrição do empreendimento e "Pontos Fortes" com marcadores dourados.

#### `Diferenciais.tsx` — Itens de lazer
Grid de tags (2 a 5 colunas dependendo da tela) mostrando os itens de lazer do imóvel (piscina, academia, playground, etc.). Cada tag é um mini `GlassCard`. Animação cascata com 30ms de atraso entre cada.

#### `Plantas.tsx` — Plantas do apartamento
Galeria de plantas igual à galeria de fotos, mas com proporção 3:4 e ícone de régua. Também tem lightbox pra ver as plantas ampliadas.

#### `Location.tsx` — Localização e mapa
Duas colunas: na esquerda, dois cards de endereço (empreendimento e stand de vendas) com links pra Waze e Google Maps + texto sobre a região. Na direita, um iframe do Google Maps mostrando a localização.

#### `WhatsAppFloat.tsx` — Botão flutuante
Botão verde fixo no canto inferior direito que aparece com animação spring (1 segundo de atraso). Ao clicar, abre o WhatsApp com o nome do imóvel já preenchido na mensagem.

---

### Componentes Base (`src/components/ui/`)

#### `CTAButton.tsx` — Botão de ação polimórfico
Este componente é inteligente: ele pode ser:
- Um link externo (`<a>`) — pra WhatsApp, abre em nova aba
- Um link interno (`<Link>`) — pra páginas do próprio site
- Um botão (`<button>`) — pra submeter formulário

Props: `href` (pra onde vai), `icon` (ícone Lucide), `variant` ("primary" dourado preenchido ou "outline" só borda), `size` (sm/md/lg). Tem animação de clique (encolhe levemente) e efeito dourado brilhante.

#### `GlassCard.tsx` — Container com efeito vidro
O "vidro fosco" que aparece em todo o site. Usa `backdrop-filter: blur(24px)` pra criar o efeito de vidro com o fundo aparecendo borrado atrás. Se `hover={true}`, aumenta levemente ao passar o mouse e mostra borda dourada.

#### `ScrollReveal.tsx` — Animação ao rolar
Quando o elemento entra na tela (detectado por `IntersectionObserver`), ele aparece suavemente. Pode vir de 4 direções: cima, baixo, esquerda, direita. Suporta atraso (`delay`) e duração customizáveis. Por padrão, só anima uma vez (`once: true`). Usa CSS transitions em vez de JavaScript pesado — mais leve e confiável.

#### `ThemeToggle.tsx` — Trocar claro/escuro
Botão que alterna entre os ícones de sol (quando está escuro, pra mudar pra claro) e lua (quando está claro, pra mudar pra escuro). A troca de ícone tem uma animação de rotação. Usa o hook `useTheme()` do `next-themes`.

#### `ParallaxImage.tsx` — Efeito parallax (disponível mas não usado)
Cria um efeito onde a imagem se move mais devagar que o scroll, dando profundidade. Atualmente está definido mas não é usado nas páginas — os banners usam imagens estáticas com overlay.

---

### Componentes Globais

#### `Header.tsx` — Navegação
Barra fixa no topo. Começa transparente e, ao rolar a página, muda pra efeito glass (fundo borraco semi-transparente). No desktop: logo + links de navegação + botão WhatsApp + toggle de tema. No celular: logo + toggle + botão hambúrguer que abre um menu animado.

#### `Footer.tsx` — Rodapé
4 colunas: (1) marca do corretor + tagline + CRECI, (2) links de navegação, (3) contatos (WhatsApp, Email, Instagram), (4) links diretos pra todos os 7 imóveis. Embaixo: copyright + texto legal da Cury Construtora.

#### `ThemeProvider.tsx` — Provedor de tema
Envolve o app inteiro. Configura o `next-themes` pra: usar classe CSS (`.dark`) pra trocar tema, começar no modo escuro por padrão, e não detectar automaticamente a preferência do sistema.

---

### Dados (`src/data/`)

#### `broker.ts` — Dados do corretor
Um objeto simples com: nome, CRECI, número de WhatsApp (usado pra montar o link), texto de exibição do WhatsApp, email, Instagram, e descrição. Também exporta a função `getWhatsAppLink(propertyTitle?)` que monta a URL do WhatsApp com mensagem pré-preenchida.

#### `properties.ts` — Dados dos imóveis
O coração do conteúdo do site. Define:
- A **interface `Property`** — o "molde" de como um imóvel é estruturado (slug, título, subtítulo, status, bairro, zona, cidade, estado, quartos, descrição, pontos fortes, diferenciais, imagens, plantas, vídeo do YouTube, localização com coordenadas, texto sobre a região, texto legal)
- O **array `properties`** — os 7 empreendimentos com todos os dados:
  1. **Parque Piedade** (Condomínio Aquarela) — 2 quartos, Lançamento, Zona Norte
  2. **Residencial Cartola** — 1 e 2 quartos, Zona Portuária
  3. **Residencial Cartola II** — 1 e 2 quartos, Zona Portuária
  4. **Condomínio Rosa** (Residencial Pixinguinha) — 2 quartos, Zona Portuária
  5. **Farol da Guanabara** — Studio/1/3 quartos, Zona Portuária
  6. **Condomínio Candeeiro** (Luzes do Rio) — 1 e 2 quartos, Zona Portuária
  7. **Condomínio Lamparina** (Luzes do Rio) — 1 e 2 quartos, Zona Portuária
- A função `getPropertyBySlug(slug)` — busca um imóvel pelo slug

**Tudo é dados estáticos** — não tem banco de dados nem API. Pra adicionar um imóvel novo, é só adicionar um objeto nesse array.

---

### Script de Otimização (`scripts/`)

#### `optimize-images.js`
Rodado com `node scripts/optimize-images.js`. Usa a biblioteca Sharp pra:
1. Percorrer todas as imagens em `public/images/`
2. Redimensionar imagens maiores que 1200px de largura
3. Converter pra WebP com 75% de qualidade
4. Só substituir se o resultado ficou menor que o original
5. Pular arquivos menores que 300KB (já estão pequenos o suficiente)

---

## Arquivos de Configuração

| Arquivo | O que faz |
|---|---|
| `next.config.mjs` | Configura o Next.js: formatos de imagem (WebP/AVIF), tamanhos responsivos (640 a 2048px), cache de 60s |
| `tailwind.config.ts` | Define as cores customizadas (gold, glass), fontes (Playfair Display, Inter), animações (fade-in, slide-up, clip-reveal), e modo escuro via classe CSS |
| `tsconfig.json` | Configura o TypeScript: modo estrito, alias `@/*` aponta pra `src/*`, compilação incremental |
| `postcss.config.mjs` | Apenas adiciona o plugin do Tailwind no pipeline de CSS |
| `.eslintrc.json` | Regras de linting do Next.js + TypeScript (encontra erros no código) |
| `package.json` | Lista todas as dependências e define os scripts (`dev`, `build`, `start`, `lint`) |

---

## Conceitos Importantes pra Aprender

### App Router (Next.js)
As pastas dentro de `src/app/` viram rotas automaticamente:
- `src/app/page.tsx` → `/` (home)
- `src/app/contato/page.tsx` → `/contato`
- `src/app/imovel/[slug]/page.tsx` → `/imovel/qualquer-coisa` (rota dinâmica, `[slug]` é uma variável)

### Server Components vs Client Components
- **Server Components** (padrão): rodam só no servidor. Enviam HTML pronto pro navegador. Mais rápidos e melhores pra SEO
- **Client Components** (marcados com `"use client"` no topo): rodam também no navegador. Necessários pra interatividade (onClick, useState, animações, useEffect)

### Static Site Generation (SSG)
A função `generateStaticParams()` no arquivo do imóvel faz o Next.js gerar 7 páginas HTML em tempo de build. Quando alguém acessa, a página já está pronta — não precisa consultar banco de dados. Isso faz o site ser muito rápido.

### Glass Morphism
O design principal do site. Funciona assim: fundo semi-transparente (`rgba(...)`) + blur no fundo (`backdrop-filter: blur(24px)`) + borda sutil + sombra. O resultado parece um vidro fosco com o conteúdo atrás aparecendo borrado.

### Variáveis CSS
Em vez de definir cores direto nos componentes, usamos variáveis em `globals.css` (ex: `--gold`, `--background`). Na classe `.dark`, trocamos os valores das variáveis. Assim, trocar o tema é só trocar as variáveis — todo o site se ajusta automaticamente.

### IntersectionObserver (API do navegador)
Usado no `ScrollReveal`. É uma API nativa do navegador que observa quando um elemento entra na área visível da tela. Quando entra, adicionamos a classe `.is-visible` e o CSS faz o elemento aparecer suavemente. É muito mais leve que bibliotecas de animação.

---

## Deploy no Vercel

O site está hospedado no [Vercel](https://vercel.com). Toda vez que um push é feito no GitHub (branch `master`), o Vercel automaticamente:
1. Clona o repositório
2. Roda `npm install`
3. Roda `npm run build` (gera as páginas estáticas)
4. Publica o site

---

## Como Adicionar um Novo Imóvel

1. Coloque as fotos em `public/images/nome-do-imovel/`
2. (Opcional) Rode `node scripts/optimize-images.js` pra converter pra WebP
3. Adicione um novo objeto no array `properties` em `src/data/properties.ts`, seguindo o molde dos que já existem
4. Adicione o link do novo imóvel no `Footer.tsx`
5. Faça commit e push — o Vercel faz o deploy automaticamente

---

## Como Alterar Dados do Corretor

Edite o arquivo `src/data/broker.ts`. Os dados se propagam automaticamente para o Header, Footer, página de Contato e seção "Seu Corretor".
