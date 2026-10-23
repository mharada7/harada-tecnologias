// ===== Cérebro 3D (nível 2) =====
// Troca a imagem do cérebro da página inicial por um cérebro 3D de polígonos,
// desenhado com a biblioteca Three.js. Se não der (celular, "reduzir movimento",
// navegador sem WebGL ou a biblioteca não carregou), a imagem normal continua.

const URL_THREE = "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js";

// cores do logo: lado esquerdo azul, lado direito vermelho (alguns tons de cada)
const AZUIS = [0x1b2a4a, 0x22355c, 0x2b4470, 0x34507f];
const VERMELHOS = [0xa50e25, 0xc8102e, 0xd63a4e, 0xe0505f];
const COR_LINHAS = 0xeef2f8;     // arestas brancas
const COR_CIRCUITO = 0x8a93a6;   // "trilhas" cinza que saem do cérebro
const COR_ANEL = 0xc8102e;       // círculo vermelho suave atrás

function podeUsar3D() {
    const telaGrande = window.matchMedia("(min-width: 768px)").matches;
    const semReduzirMovimento = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    const economiaDeDados = navigator.connection && navigator.connection.saveData;
    return telaGrande && semReduzirMovimento && !economiaDeDados && temWebGL();
}

// WebGL é o recurso do navegador que desenha 3D usando a placa de vídeo
function temWebGL() {
    try {
        const teste = document.createElement("canvas");
        return Boolean(teste.getContext("webgl2") || teste.getContext("webgl"));
    } catch (erro) {
        return false;
    }
}

// sorteio "com semente": sorteia sempre os mesmos números,
// então o cérebro tem a mesma forma e as mesmas cores em toda visita
function criarSorteio(semente) {
    return function () {
        semente = (semente * 16807) % 2147483647;
        return (semente - 1) / 2147483646;
    };
}

// "ruído" que depende só da posição: o mesmo vértice, repetido em triângulos
// vizinhos, é empurrado igual, e a superfície não abre buracos
function ruido(x, y, z) {
    const n = Math.sin(Math.round(x * 1000) * 12.9898 +
                       Math.round(y * 1000) * 78.233 +
                       Math.round(z * 1000) * 37.719) * 43758.5453;
    return (n - Math.floor(n)) * 2 - 1;   // número entre -1 e 1
}

// bolinha desenhada num canvas 2D, usada como "figurinha" nos vértices
function criarTexturaBolinha(THREE, vazada) {
    const tela = document.createElement("canvas");
    tela.width = tela.height = 64;
    const pincel = tela.getContext("2d");
    pincel.beginPath();
    pincel.arc(32, 32, 24, 0, Math.PI * 2);
    pincel.fillStyle = vazada ? "rgba(0, 0, 0, 0)" : "#ffffff";
    pincel.fill();
    pincel.lineWidth = 8;
    pincel.strokeStyle = vazada ? "#8a93a6" : "#1b2a4a";
    pincel.stroke();
    const textura = new THREE.CanvasTexture(tela);
    textura.colorSpace = THREE.SRGBColorSpace;
    return textura;
}

function criarCerebro(THREE) {
    const sorteio = criarSorteio(7);
    const grupo = new THREE.Group();

    // 1) forma: um icosaedro (80 triângulos) deformado e esticado
    const forma = new THREE.IcosahedronGeometry(1, 1);
    const posicoes = forma.attributes.position;

    for (let i = 0; i < posicoes.count; i++) {
        let x = posicoes.getX(i), y = posicoes.getY(i), z = posicoes.getZ(i);
        const empurrao = 1 + 0.12 * ruido(x, y, z);
        x *= empurrao * 1.3;    // mais largo que alto, como o logo
        y *= empurrao * 0.95;
        z *= empurrao * 0.9;
        if (y < -0.5) y *= 0.85;   // base um pouco achatada
        posicoes.setXYZ(i, x, y, z);
    }
    forma.computeVertexNormals();   // cada triângulo "olha" para um lado: faces chapadas

    // 2) cores: cada triângulo (3 vértices) recebe um tom; à direita, vermelho
    const cores = [];
    const cor = new THREE.Color();
    for (let i = 0; i < posicoes.count; i += 3) {
        const centroX = (posicoes.getX(i) + posicoes.getX(i + 1) + posicoes.getX(i + 2)) / 3;
        const paleta = centroX > 0.35 ? VERMELHOS : AZUIS;
        cor.setHex(paleta[Math.floor(sorteio() * paleta.length)]);
        for (let v = 0; v < 3; v++) cores.push(cor.r, cor.g, cor.b);
    }
    forma.setAttribute("color", new THREE.Float32BufferAttribute(cores, 3));

    const material = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
    grupo.add(new THREE.Mesh(forma, material));

    // 3) arestas brancas (um tiquinho para fora, para não "brigar" com as faces)
    const arestas = new THREE.LineSegments(
        new THREE.EdgesGeometry(forma, 1),
        new THREE.LineBasicMaterial({ color: COR_LINHAS })
    );
    arestas.scale.setScalar(1.004);
    grupo.add(arestas);

    // 4) bolinhas nos vértices (sem repetir os vértices compartilhados)
    const unicos = new Map();
    for (let i = 0; i < posicoes.count; i++) {
        const p = new THREE.Vector3(posicoes.getX(i), posicoes.getY(i), posicoes.getZ(i));
        unicos.set(p.toArray().map((n) => n.toFixed(3)).join(","), p);
    }
    const vertices = [...unicos.values()];
    const bolinhas = new THREE.Points(
        new THREE.BufferGeometry().setFromPoints(vertices.map((p) => p.clone().multiplyScalar(1.01))),
        new THREE.PointsMaterial({ size: 0.55, map: criarTexturaBolinha(THREE, false), alphaTest: 0.5 })
    );
    grupo.add(bolinhas);

    // 5) "trilhas de circuito": dos vértices mais afastados do centro (na frente),
    //    uma linha sai para fora e termina numa bolinha vazada
    const pontasDasTrilhas = [];
    const trilhas = [];
    vertices
        .filter((p) => p.z > -0.2)
        .sort((a, b) => Math.hypot(b.x, b.y) - Math.hypot(a.x, a.y))
        .slice(0, 8)
        .forEach((p) => {
            const direcao = new THREE.Vector3(p.x, p.y, 0).normalize();
            const ponta = p.clone().add(direcao.multiplyScalar(0.3));
            trilhas.push(p, ponta);
            pontasDasTrilhas.push(ponta);
        });
    grupo.add(new THREE.LineSegments(
        new THREE.BufferGeometry().setFromPoints(trilhas),
        new THREE.LineBasicMaterial({ color: COR_CIRCUITO })
    ));
    grupo.add(new THREE.Points(
        new THREE.BufferGeometry().setFromPoints(pontasDasTrilhas),
        new THREE.PointsMaterial({ size: 0.45, map: criarTexturaBolinha(THREE, true), alphaTest: 0.5 })
    ));

    // 6) tronco: a "pontinha" azul embaixo do cérebro, como no logo.
    //    Um cone de 3 lados (uma pirâmide) virado para baixo, com a base escondida dentro do cérebro
    const ALTURA_TRONCO = 0.55;
    const formaTronco = new THREE.ConeGeometry(0.24, ALTURA_TRONCO, 3);
    const tronco = new THREE.Group();
    tronco.add(new THREE.Mesh(
        formaTronco,
        new THREE.MeshLambertMaterial({ color: 0x2b4470, flatShading: true })
    ));
    tronco.add(new THREE.LineSegments(
        new THREE.EdgesGeometry(formaTronco),
        new THREE.LineBasicMaterial({ color: COR_LINHAS })
    ));
    // bolinha na ponta (no cone, a ponta fica em +altura/2 antes de virar)
    tronco.add(new THREE.Points(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, ALTURA_TRONCO / 2, 0)]),
        new THREE.PointsMaterial({ size: 0.55, map: criarTexturaBolinha(THREE, false), alphaTest: 0.5 })
    ));
    tronco.rotation.z = Math.PI;              // vira de cabeça para baixo: ponta para baixo
    tronco.position.set(0.12, -0.95, 0.15);   // um pouco à direita do centro e para a frente
    grupo.add(tronco);

    return grupo;
}

function criarAnel(THREE) {
    const pontos = [];
    for (let i = 0; i < 96; i++) {
        const angulo = (i / 96) * Math.PI * 2;
        pontos.push(new THREE.Vector3(Math.cos(angulo) * 1.65, Math.sin(angulo) * 1.65, -0.6));
    }
    return new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(pontos),
        new THREE.LineBasicMaterial({ color: COR_ANEL, transparent: true, opacity: 0.25 })
    );
}

async function iniciar() {
    const imagem = document.querySelector(".hero .cerebro");
    if (!imagem || !podeUsar3D()) return;

    let THREE;
    try {
        THREE = await import(URL_THREE);   // baixa a biblioteca só agora, só no computador
    } catch (erro) {
        return;   // sem internet ou CDN fora do ar: a imagem continua
    }

    // a cena 3D: "palco" (cena) + "olho" (câmera) + "pintor" (renderer)
    const cena = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 760 / 630, 0.1, 100);
    camera.position.z = 5.2;

    cena.add(new THREE.AmbientLight(0xffffff, 2.2));   // luz geral (sem ela, as cores ficam escuras)
    const luz = new THREE.DirectionalLight(0xffffff, 1.2);   // luz de um lado: dá volume
    luz.position.set(2, 3, 4);
    cena.add(luz);

    const cerebro = criarCerebro(THREE);
    cena.add(cerebro);
    cena.add(criarAnel(THREE));   // o anel fica parado, só o cérebro se mexe

    const pintor = new THREE.WebGLRenderer({ antialias: true, alpha: true });   // alpha: fundo transparente
    pintor.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const tela = pintor.domElement;
    tela.className = "cerebro cerebro-3d";   // mesma classe: herda tamanho e posição da imagem
    tela.setAttribute("aria-hidden", "true");   // é decorativo, como a imagem (alt="")

    function ajustarTamanho() {
        const largura = imagem.isConnected ? imagem.clientWidth : tela.clientWidth;
        pintor.setSize(largura, Math.round(largura * 630 / 760), false);
    }
    ajustarTamanho();

    // o mouse (em qualquer lugar da página) inclina o cérebro um pouco
    const alvo = { x: 0, y: 0 };
    window.addEventListener("pointermove", function (evento) {
        alvo.x = (evento.clientX / window.innerWidth - 0.5) * 0.8;
        alvo.y = (evento.clientY / window.innerHeight - 0.5) * 0.5;
    });
    window.addEventListener("resize", ajustarTamanho);

    // só anima quando a hero está visível na tela (economiza bateria e processador)
    let visivel = true;
    new IntersectionObserver(function (entradas) {
        visivel = entradas[0].isIntersecting;
    }).observe(tela);

    const relogio = new THREE.Clock();
    function quadro() {
        requestAnimationFrame(quadro);
        if (!visivel) return;
        const t = relogio.getElapsedTime();
        // balança devagar (sem dar a volta inteira: a "frente" do logo sempre aparece)
        // e vai "perseguindo" o mouse aos poucos (7% do caminho por quadro = movimento suave)
        cerebro.rotation.y += (Math.sin(t * 0.5) * 0.35 + alvo.x - cerebro.rotation.y) * 0.07;
        cerebro.rotation.x += (Math.sin(t * 0.35) * 0.12 + alvo.y - cerebro.rotation.x) * 0.07;
        pintor.render(cena, camera);
    }

    pintor.render(cena, camera);   // desenha o 1º quadro ANTES de trocar: sem "piscar"
    imagem.replaceWith(tela);
    quadro();
}

iniciar();
