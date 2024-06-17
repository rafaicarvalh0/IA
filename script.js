const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em uma aula de ciências, você se depara com uma consequência das ações humanas na natureza e fica assustado",
        alternativas: [
            {
                texto: "O que é isso?",
                afirmacao: "É um fenômeno climático caracterizado pelo aumento gradual da temperatura média da atmosfera da Terra ao longo do tempo. Esse aumento se deve às atitudes humanas que liberam gases de efeito estufa na atmosfera, como a queima de combustíveis fósseis, por exemplo. "
            },
            {
                texto: "Como combater?",
                afirmacao: "Transição para fontes de energia limpa, reduzir a dependência de combustíveis fósseis; Melhorar a eficácia energética por meio de tecnologias eficientes e prática de conservação de energia; Combater o desmatamento e promover o reflorestamento; Investir em transporte público, veículos elétricos e compartilhamento de carros para reduzir as emissões de gases do setor de transporte."
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();