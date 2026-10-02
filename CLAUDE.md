# Site Harada Tecnologias — contexto para o Claude

## Sobre o projeto
Site para divulgar a **Harada Tecnologias** (antes "Manaus Tecnologias"), a loja de
tecnologia do Matheus. O nome homenageia o sobrenome do pai e as origens japonesas.
Slogan: "Conectando a Amazônia ao Futuro".
- **Serviços de T.I.:**
  - Formatação de computadores
  - Serviço de backup
  - Instalação do pacote Office
- **Celulares:** troca de frontal e suporte (configuração, transferência de dados).
- **Desenvolvimento:** cardápios digitais; Backup Checker em desenvolvimento ("Em breve").
- **Venda de eletrônicos** (cabos, carregadores, películas, fones): NÃO aparecem mais no
  site; ficam no catálogo do WhatsApp Business (`https://wa.me/c/5592992282487`) e no
  Instagram **@haradatecnologias** (`https://www.instagram.com/haradatecnologias/`).
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

## Estado da v0.4 (identidade Harada + botão de WhatsApp); o atual está no Roadmap (v0.9)
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
   **1º projeto no portfólio (substituiu o cartão "Em breve"):** Café Aconchego,
   cardápio de demonstração (repositório `mharada7/cardapio-digital`, pasta
   `C:\ManausTecnologias\cardapio-digital`). Link do cartão com `?mesa=7`, porque o
   foco comercial é o cardápio aberto pelo QR Code da mesa. Imagem
   `img/portfolio/cafe-aconchego.jpg` (1200x900: print do celular sobre foto de café).
   Promessas do site ajustadas ao que HTML/CSS/JS entregam: "Atualização rápida" (o
   Matheus atualiza a pedido do cliente, em minutos; possível plano de manutenção mensal).
   NÃO prometer que o dono edita sozinho, a menos que o cardápio passe a ler os dados
   de uma planilha Google Sheets (ideia para a v2 do cardápio).
7. ✅ v0.7 (SEO básico): `<title>` descritivo, `meta description`, Open Graph + twitter:card
   (prévia no WhatsApp com `img/previa.png`, 1200x630: cérebro + nome + slogan + hanko,
   gerada a partir de HTML com Edge headless) e favicon/apple-touch-icon `img/icone.png`
   (180x180: o CÉREBRO, marca registrada, sobre fundo washi arredondado; o Matheus
   preferiu o cérebro ao carimbo 原田). `og:image` precisa de URL absoluta.
   WhatsApp guarda a prévia em cache: testar com `?v=2` no fim do link.
8. ✅ v0.8: cabeçalho compacto (cérebro ao lado do nome a partir de 960px, `.marca-texto`;
   cérebro 240px no celular). Portfólio como carro-chefe: ordem das seções agora
   Serviços → **Cardápios Digitais** → Acessórios → Contato. Café Aconchego em
   `.projeto-destaque` (880px, imagem | texto lado a lado a partir de 768px, botão
   `.botao-secundario` "Testar o cardápio →"); outros projetos entram em `.portfolio`
   abaixo (modelo comentado lá). Cuidado: `.destaque` é a classe do "Futuro" no slogan.
9. ✅ v0.9: site dividido em 3 páginas, com menu `.topo` (marca + `.menu`, link da página
   atual com `aria-current="page"`) e rodapé `footer#contato` repetidos em cada página
   (sem framework: ao mudar menu/rodapé, mudar nos 3 arquivos). Fundos alternados agora por
   classe `.fundo-escuro` (não mais `nth-child`); `.centro` centraliza o texto.
   - `index.html`: `.hero` compacta (cérebro 104px no celular / 200px a partir de 768px,
     "HARADA" no máx. 3,5rem): nome em `<p class="marca">` (só visual), 原田テクノロジー,
     slogan, **h1 `.chamada`** "Soluções digitais e suporte técnico em Manaus." (é o h1 por
     SEO) e `.botoes` (WhatsApp + "Ver serviços" → `#servicos`). Meta: no celular 375x667 o
     título "Serviços" já aparece na 1ª tela. Depois: seção "Serviços" (`id="servicos"`) com 4 "portas"
     em grade 2x2 (`.portas`/`.porta`): Computadores, Celulares, Sistemas de PDV (links para
     `suporte.html#computadores|#celulares|#pdv`) e Desenvolvimento. Cada porta: ícone,
     h3, frase curta, `.checklist` (✓; item `.breve` com ◌) e `.porta-link` alinhado no
     fundo (flex column + `margin-top: auto`). Depois, faixa de acessórios com botões para
     o catálogo do WhatsApp e Instagram.
   - `suporte.html` (支援 = apoio/suporte): Computadores, Celulares (`.cartoes-2`), Sistemas de PDV
     (mesma ordem das portas do Início). Cada seção termina com o seu botão de WhatsApp
     (`p.acao`, mensagem com o assunto: computador / celular / PDV); não há mais a seção
     "Peça um orçamento".
   - `desenvolvimento.html` (開発): `.abas` (atalhos), Cardápios Digitais + portfólio,
     seção `#em-breve` com cartão Backup Checker (`.em-breve` + `.etiqueta`).
   - Nomenclatura padronizada: **"Suporte técnico"** (nunca "Assistência técnica"). A página
     foi renomeada de `assistencia.html` para `suporte.html`; o `assistencia.html` que
     ficou é só um redirecionamento (meta refresh) para não quebrar links antigos.
   - Páginas internas usam `.titulo-pagina` (h1 + kanji `.titulo-jp`). No celular o menu
     mostra só "Suporte" (`.some-celular`) para caber em uma linha a 360px.
   - Fotos de `img/produtos/` removidas.
   - Cache: o CSS é carregado como `style.css?v=0.13` nas 3 páginas. Ao mudar o `style.css`,
     subir o número nas 3 (senão o celular mistura CSS antigo com HTML novo e "distorce").
   - Menu testado em 320px (`@media (max-width: 360px)` diminui nome e links). Há um 2º
     bloco 360px (slogan) DEPOIS do de 480px, porque a regra mais abaixo vence.
10. ✅ v0.10: **uma página por serviço** (substitui a `suporte.html` única):
    - `computadores.html`, `celulares.html`, `pdv.html` (kanji 支援) e `desenvolvimento.html` (開発).
      Estrutura: `.titulo-pagina` → seção "O que fazemos" (`.fundo-escuro`, cartões + botão de
      WhatsApp com mensagem do assunto) → [só PDV: "Cardápio digital também", link para
      `desenvolvimento.html#cardapios`] → "Outros serviços" (`nav.abas` com as outras páginas).
    - Menu (6 links): Início · Computadores · Celulares · PDV · Desenvolvimento · Contato.
      Abaixo de 900px a marca fica em cima e o menu embaixo; no celular o menu ocupa 2 linhas.
    - As portas do Início levam direto para cada página.
    - `suporte.html` e `assistencia.html` agora são só redirecionamentos (JS lê o `#hash`:
      `#celulares` → `celulares.html` etc.; sem hash → `index.html#servicos`).
    - CSS em `style.css?v=0.13`. A seção v0.9 acima descreve a estrutura anterior.
11. Futuro: formulário de orçamento, domínio próprio, página própria do Backup Checker

## Como o Claude deve trabalhar comigo
A metodologia está nas preferências globais (`~/.claude/CLAUDE.md`): iniciante,
português, etapas pequenas, OBJETIVO → … → PRÓXIMO PASSO, eu faço os commits.

## Como rodar
Abrir o `index.html` no navegador (clique duplo no arquivo) ou usar a extensão
**Live Server** do VS Code.
