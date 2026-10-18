// ===== Efeito 3D (nível 1): o cartão inclina seguindo o mouse =====
// O JavaScript só calcula os ângulos e guarda em variáveis CSS (--rx, --ry...).
// Quem desenha a inclinação é o CSS (classe .efeito-3d no style.css).

const INCLINACAO_MAXIMA = 8;   // em graus: mais que isso fica exagerado

// Só ativa com mouse (no celular o dedo está rolando a página) e se a pessoa
// não pediu "reduzir movimento" nas configurações do aparelho (acessibilidade)
const podeAnimar = window.matchMedia(
    "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
).matches;

if (podeAnimar) {
    const cartoes = document.querySelectorAll(".porta, .plano, .cartoes > li");

    cartoes.forEach(function (cartao) {
        cartao.classList.add("efeito-3d");

        cartao.addEventListener("mouseenter", function () {
            cartao.classList.add("inclinando");   // resposta rápida enquanto o mouse mexe
        });

        cartao.addEventListener("mousemove", function (evento) {
            // posição do mouse dentro do cartão, de 0 (esquerda/topo) a 1 (direita/base)
            const caixa = cartao.getBoundingClientRect();
            const x = (evento.clientX - caixa.left) / caixa.width;
            const y = (evento.clientY - caixa.top) / caixa.height;

            // centro = 0 grau; bordas = ± INCLINACAO_MAXIMA
            cartao.style.setProperty("--ry", (x - 0.5) * 2 * INCLINACAO_MAXIMA + "deg");
            cartao.style.setProperty("--rx", (0.5 - y) * 2 * INCLINACAO_MAXIMA + "deg");

            // o brilho acompanha o mouse
            cartao.style.setProperty("--brilho-x", x * 100 + "%");
            cartao.style.setProperty("--brilho-y", y * 100 + "%");
        });

        cartao.addEventListener("mouseleave", function () {
            cartao.classList.remove("inclinando");   // volta devagar para o lugar
            cartao.style.setProperty("--rx", "0deg");
            cartao.style.setProperty("--ry", "0deg");
        });
    });
}
