let vidas = 3;
let pontos = 0;

const textoHistoria = document.getElementById('texto-historia');
const opcoesBox = document.getElementById('opcoes-box');
const elementoVidas = document.getElementById('vidas');
const elementoPontos = document.getElementById('pontos');
const imagemCenario = document.getElementById('imagem-cenario');

// Links das Imagens
const imgMapa = "https://images.unsplash.com/photo-1597839219216-a773cb2473e4?w=600&auto=format&fit=crop";
const imgNorte = "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&auto=format&fit=crop";
const imgNordeste = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop";
const imgCentro = "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&auto=format&fit=crop";
const imgSul = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop";
const imgTesouro = "https://images.unsplash.com/photo-1584441405886-bc91be61e56a?w=600&auto=format&fit=crop";

function atualizarStatus() {
    elementoVidas.textContent = vidas;
    elementoPontos.textContent = pontos;
}

function mostrarCenario(texto, imagemUrl, opcoes) {
    textoHistoria.textContent = texto;
    imagemCenario.src = imagemUrl;
    opcoesBox.innerHTML = '';

    opcoes.forEach(opcao => {
        const btn = document.createElement('button');
        btn.textContent = opcao.texto;
        btn.onclick = opcao.acao;
        opcoesBox.appendChild(btn);
    });
}

function iniciarJogo() {
    vidas = 3;
    pontos = 0;
    atualizarStatus();
    
    mostrarCenario(
        "Você encontrou o mapa do Tesouro Perdido do Brasil! Escolha uma das 4 rotas organizadas por regiões para iniciar sua expedição:",
        imgMapa,
        [
            { texto: "🌳 Rota Norte: Floresta Amazônica", acao: rotaNorte },
            { texto: "🏖️ Rota Nordeste: Litoral e Sertão", acao: rotaNordeste },
            { texto: "🏛️ Rota Centro-Oeste: Planalto Central", acao: rotaCentro },
            { texto: "🌲 Rota Sul: Pampas e Serras", acao: rotaSul }
        ]
    );
}

// --- ROTA NORTE ---
function rotaNorte() {
    mostrarCenario(
        "🌳 ROTA NORTE: Um guia ribeirinho pede a localização exata para iniciar a viagem:\nEm qual estado brasileiro fica localizado o Parque Nacional do Jaú e a cidade de Manaus?",
        imgNorte,
        [
            { texto: "1. Pará", acao: errouResposta },
            { texto: "2. Amazonas", acao: acertoNorte },
            { texto: "3. Roraima", acao: errouResposta },
            { texto: "4. Acre", acao: errouResposta }
        ]
    );
}

function acertoNorte() {
    pontos += 15;
    atualizarStatus();
    mostrarCenario(
        "✨ Pista 2: Qual é o rio mais extenso em volume de água que atravessa a região Norte?",
        imgNorte,
        [
            { texto: "1. Rio São Francisco", acao: errouResposta },
            { texto: "2. Rio Paraná", acao: errouResposta },
            { texto: "3. Rio Amazonas", acao: vitoria },
            { texto: "4. Rio Tocantins", acao: errouResposta }
        ]
    );
}

// --- ROTA NORDESTE ---
function rotaNordeste() {
    mostrarCenario(
        "🏖️ ROTA NORDESTE: Para decifrar o mapa na praia de Salvador, responda:\nQual foi a primeira capital do Brasil antes do Rio de Janeiro?",
        imgNordeste,
        [
            { texto: "1. Recife", acao: errouResposta },
            { texto: "2. Salvador", acao: acertoNordeste },
            { texto: "3. Fortaleza", acao: errouResposta },
            { texto: "4. São Luís", acao: errouResposta }
        ]
    );
}

function acertoNordeste() {
    pontos += 15;
    atualizarStatus();
    mostrarCenario(
        "⚓ Pista 2: Qual é o famoso bioma exclusivo do Brasil encontrado principalmente no interior da região Nordeste?",
        imgNordeste,
        [
            { texto: "1. Caatinga", acao: vitoria },
            { texto: "2. Pantanal", acao: errouResposta },
            { texto: "3. Pampa", acao: errouResposta },
            { texto: "4. Mata Atlântica", acao: errouResposta }
        ]
    );
}

// --- ROTA CENTRO-OESTE ---
function rotaCentro() {
    mostrarCenario(
        "🏛️ ROTA CENTRO-OESTE: Chegando ao planalto, responda:\nQual arquiteto e urbanista projetou o plano piloto da capital Brasília?",
        imgCentro,
        [
            { texto: "1. Oscar Niemeyer e Lúcio Costa", acao: acertoCentro },
            { texto: "2. Aleijadinho", acao: errouResposta },
            { texto: "3. Tarsila do Amaral", acao: errouResposta },
            { texto: "4. Candido Portinari", acao: errouResposta }
        ]
    );
}

function acertoCentro() {
    pontos += 15;
    atualizarStatus();
    mostrarCenario(
        "🌾 Pista 2: Qual é o maior bioma de planície alagável do mundo presente no Centro-Oeste?",
        imgCentro,
        [
            { texto: "1. Cerrado", acao: errouResposta },
            { texto: "2. Pantanal", acao: vitoria },
            { texto: "3. Pampa", acao: errouResposta },
            { texto: "4. Manguezal", acao: errouResposta }
        ]
    );
}

// --- ROTA SUL ---
function rotaSul() {
    mostrarCenario(
        "🌲 ROTA SUL: Para avançar entre as serras, acerte a questão histórica:\nAs Cataratas do Iguaçu ficam na fronteira de qual estado brasileiro com a Argentina?",
        imgSul,
        [
            { texto: "1. Rio Grande do Sul", acao: errouResposta },
            { texto: "2. Santa Catarina", acao: errouResposta },
            { texto: "3. Paraná", acao: acertoSul },
            { texto: "4. São Paulo", acao: errouResposta }
        ]
    );
}

function acertoSul() {
    pontos += 15;
    atualizarStatus();
    mostrarCenario(
        "🍂 Pista 2: Qual árvore nativa símbolo da região Sul produz o pinhão?",
        imgSul,
        [
            { texto: "1. Pau-Brasil", acao: errouResposta },
            { texto: "2. Araucária (Pinheiro-do-paraná)", acao: vitoria },
            { texto: "3. Ipê-Amarelo", acao: errouResposta },
            { texto: "4. Cobre-velho", acao: errouResposta }
        ]
    );
}

// --- FIM DE JOGO ---
function errouResposta() {
    vidas--;
    atualizarStatus();
    if (vidas > 0) {
        alert(`Resposta incorreta! Você perdeu 1 vida. Restam ${vidas} vidas.`);
        iniciarJogo();
    } else {
        mostrarCenario(
            "☠️ GAME OVER! Suas vidas acabaram. O tesouro permaneceu oculto.",
            imgMapa,
            []
        );
    }
}

function vitoria() {
    pontos += 25;
    atualizarStatus();
    mostrarCenario(
        `🏆 PARABÉNS! Você provou seu conhecimento sobre o Brasil e desvendou o Tesouro Perdido!\nPontuação final: ${pontos} pontos.`,
        imgTesouro,
        []
    );
}

iniciarJogo();