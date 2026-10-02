# Site Harada Tecnologias — contexto para o Claude

## Sobre o projeto
Site para divulgar a **Harada Tecnologias** (antes "Manaus Tecnologias"), a loja de
tecnologia do Matheus. O nome homenageia o sobrenome do pai e as origens japonesas.
Slogan: "Conectando a Amazônia ao Futuro".
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
- WhatsApp: (92) 99228-2487 (link `https://wa.me/5592992282487?text=...`)
- E-mail: matheus.haradati@gmail.com
- Loja **somente online**, em Manaus - AM (sem endereço físico, sem mapa).
- Horário: não exibido (o "24 horas" foi retirado para não prometer o que não dá para cumprir).

## Links
- Site no ar: https://mharada7.github.io/harada-tecnologias/
- Repositório: https://github.com/mharada7/harada-tecnologias (branch `main`)
- GitHub Pages publica a partir de `main` / `(root)`: cada `git push` atualiza o site.
- O endereço antigo (`manaus-tecnologias`) não funciona mais (404).
- A pasta local continua `C:\ManausTecnologias\site` (não renomeada).

## Serviço "Suporte a sistemas de PDV"
- O Matheus trabalha no iComanda (software para bares e restaurantes) e presta suporte
  como freelancer; a maioria dos clientes dele é desse setor.
- Cartão em Serviços (1º lugar, ícone headset), texto GENÉRICO: "sistemas de PDV para
  bares, restaurantes e food service". Por decisão do Matheus, o site NÃO cita o iComanda
  (evita uso de marca e exposição pública de possível conflito com o empregador).
- Público-alvo forte: food service (combina com a seção Cardápios Digitais).

## A definir (perguntar ao Matheus antes de usar)
- Preços (exibir ou não no site?)
- Contato: redes sociais; horário real de atendimento (se quiser exibir)
- Domínio (ex.: haradatecnologias.com.br)

## Identidade visual: tema japonês sutil (desde a v0.4)
- Imagem: `img/cerebro.png` (760x630, recortada do cartaz da marca; fundo #F6F5F1,
  igual ao fundo do site). O nome é texto HTML (HARADA / TECNOLOGIAS / 原田テクノロジー).
- Paleta em variáveis no `:root` do `style.css`: washi #F6F5F1 (fundo),
  washi-escuro #EFECE6 (seções alternadas), sumi #141B2B (texto), ai #2B4470 (principal),
  aka #C8102E (destaque/botão), aka-escuro #A50E25, branco, texto-suave #5B6478, linha #DCD7CE.
- Fontes (Google Fonts): Montserrat 600–800 (títulos), Inter (textos),
  Noto Serif JP 600 só com os caracteres de 原田テクノロジー (parâmetro `&text=`).
- Detalhes: carimbo hanko 原田 (`writing-mode: vertical-rl`), cantoneiras (`::before/::after`),
  linhas vermelhas no slogan e tracinho vermelho sob os `h2`.

## Estado atual: v0.4 (identidade Harada + botão de WhatsApp)
- `index.html`: cabeçalho com hanko, cérebro e nome; seções Serviços, Eletrônicos e
  Contato (`id="contato"`, botão `.botao` de WhatsApp); rodapé.
- `style.css`: variáveis, cabeçalho japonês, seções alternadas (`nth-child(odd)`), cartões em
  grid responsivo (`.cartoes`; `.produtos` com borda vermelha), botão, `@media (max-width: 480px)`.
- Testado em 1280px, 375px e 360px (screenshots com Edge headless + iframe).
- Já aprendido: tags básicas, img/alt (alt vazio em imagem decorativa), span, lang, aria-hidden,
  link de CSS, variáveis, box model, seletores (classe, id, `>`, `:hover`, `nth-child`),
  pseudo-elementos, position relative/absolute, clamp, letter-spacing, media query,
  grid `auto-fit/minmax`, especificidade/cascata, URL encoding, ciclo git add → commit → push,
  `git remote set-url`.

## Roadmap
1. ✅ v0.1: página inicial simples (`index.html`) com nome da loja e contato
2. ✅ v0.2: estilo com CSS (logo, cores, fontes, layout que funcione no celular)
3. ✅ v0.3: Serviços com ícones SVG inline (estilo Lucide, `.icone`) + título `h3` e descrição;
   seção "Eletrônicos" renomeada para "Acessórios para celular" (palavras que o cliente busca);
   cartões com foto (`.foto-produto`, 4:3, `object-fit: contain`) + título, sem etiquetas
   (o Matheus preferiu sem, mais clean). Fotos em `img/produtos/` (cabos, carregadores,
   peliculas, fones .jpg, ~447px, genéricas da internet por escolha do Matheus; trocar por
   fotos próprias/maiores quando possível).
4. ✅ v0.4: botão de WhatsApp · identidade Harada · "Loja online · Manaus - AM" (sem mapa)
5. ✅ v0.5: publicar no GitHub Pages
6. ✅ v0.6: seção **Cardápios Digitais** (`id="cardapios"`): intro, 3 benefícios, portfólio
   (`.portfolio` / `.projeto`, cartão "Em breve" 準備中, modelo comentado no HTML,
   imagens em `img/portfolio/` 1200x900) e botão de WhatsApp próprio.
   Próximo projeto do Matheus (em outra conversa): o próprio cardápio digital com
   carrinho em JavaScript e pedido via link `wa.me` montado na hora.
   Promessas do site ajustadas ao que HTML/CSS/JS entregam: "Atualização rápida" (o
   Matheus atualiza a pedido do cliente, em minutos; possível plano de manutenção mensal).
   NÃO prometer que o dono edita sozinho, a menos que o cardápio passe a ler os dados
   de uma planilha Google Sheets (ideia para a v2 do cardápio).
7. Futuro: catálogo de produtos, formulário de orçamento, domínio próprio, SEO

## Como o Claude deve trabalhar comigo
A metodologia está nas preferências globais (`~/.claude/CLAUDE.md`): iniciante,
português, etapas pequenas, OBJETIVO → … → PRÓXIMO PASSO, eu faço os commits.

## Como rodar
Abrir o `index.html` no navegador (clique duplo no arquivo) ou usar a extensão
**Live Server** do VS Code.
