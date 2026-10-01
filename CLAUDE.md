# Site Manaus Tecnologias — contexto para o Claude

## Sobre o projeto
Site para divulgar a **Manaus Tecnologias**, a loja de tecnologia do Matheus.
- **Serviços de T.I.:**
  - Formatação de computadores
  - Serviço de backup
  - Instalação do pacote Office
- **Venda de eletrônicos:**
  - Cabos para celulares em geral
  - Carregadores
  - Películas de vidro
  - Fones de ouvido
- Objetivo do site: apresentar a loja, mostrar serviços e produtos e fazer o
  cliente entrar em contato.

## Tecnologia
- **HTML + CSS + JavaScript puro**, sem frameworks, para aprender a base da web.
- Sem backend por enquanto: o contato será por WhatsApp, e-mail ou formulário simples.
- Publicação: **GitHub Pages** (grátis).

## Contato (já definido)
- WhatsApp: (92) 99228-2487
- E-mail: matheus.haradati@gmail.com
- Horário: 24 horas

## Links
- Site no ar: https://mharada7.github.io/manaus-tecnologias/
- Repositório: https://github.com/mharada7/manaus-tecnologias (branch `main`)
- GitHub Pages publica a partir de `main` / `(root)`: cada `git push` atualiza o site.

## A definir (perguntar ao Matheus antes de usar)
- Preços (exibir ou não no site?)
- Contato: endereço, redes sociais
- Domínio (ex.: manaustecnologias.com.br)

## Identidade visual (definida na v0.2)
- Logo: `img/logo.png` (250x248, fundo branco), cérebro colorido em polígonos.
- Tema "clean e tecnológico". Paleta em variáveis no `:root` do `style.css`:
  azul-marinho #14213D (texto), azul #1E6FD9 (principal), ciano #22B8E6,
  laranja #F7931E (chamada para ação), fundos #FFFFFF / #F5F8FC, texto suave #5B6B82.
- Fontes (Google Fonts): Montserrat (títulos) e Inter (textos).

## Estado atual: v0.2 (publicada)
- `index.html`: logo no `<h1>`, seções Serviços, Eletrônicos e Contato (`id="contato"`), rodapé.
- `style.css`: variáveis, faixa em degradê no topo, seções alternadas (`nth-child(odd)`),
  cartões em grid responsivo (`.cartoes`; `.produtos` com borda laranja), rodapé azul-marinho.
- Já aprendido: tags básicas, img/alt, link de CSS, variáveis, box model, seletores
  (classe, id, `>`, `:hover`, `nth-child`), grid `auto-fit/minmax`, especificidade/cascata,
  ciclo git add → commit → push.

## Roadmap
1. ✅ v0.1: página inicial simples (`index.html`) com nome da loja e contato
2. ✅ v0.2: estilo com CSS (logo, cores, fontes, layout que funcione no celular)
3. v0.3: seções de Serviços de T.I. e Eletrônicos
4. v0.4: botão de WhatsApp e mapa/endereço
5. ✅ v0.5: publicar no GitHub Pages
6. Futuro: catálogo de produtos, formulário de orçamento, domínio próprio, SEO

## Como o Claude deve trabalhar comigo
A metodologia está nas preferências globais (`~/.claude/CLAUDE.md`): iniciante,
português, etapas pequenas, OBJETIVO → … → PRÓXIMO PASSO, eu faço os commits.

## Como rodar
Abrir o `index.html` no navegador (clique duplo no arquivo) ou usar a extensão
**Live Server** do VS Code.
