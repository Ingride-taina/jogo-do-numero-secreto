let listadenumerossorteados=[];
let numerolimite=10;
let numerosecreto=gerarNumeroAleatorio();
let tentativas=1;

//let titulo = document.querySelector ('h1');
//titulo.innerHTML= 'jogo do número secreto';

//let paragrafo = document.querySelector ('p')
//paragrafo.innerHTML= 'escolha um número entre 1 e 10'
// ↑ transformando essas linhas em uma função só  ↓
//funcao com parametros ↓ apenas executa mas nao devolve informaçao (sem retorno) ↓
function textosDaTela (tag, texto){
    let campo= document.querySelector (tag);
    campo.innerHTML=texto;
    
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
function exibirMensagemInicial() {
    textosDaTela ('h1', 'ola bem vindo ao jogo do numero secreto'); 
    textosDaTela ('p', 'escolha um numero entre 1 e 10');
}
exibirMensagemInicial();

//funcao sem parametro e sem retorno ↓
function verificarChute() {
    let chute= document.querySelector ('input').value;

    if (chute==numerosecreto){
        textosDaTela('h1',  'Acertou!');
        let palavraTentativa= tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemDeTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`
        textosDaTela ('p', mensagemDeTentativas)
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
        if (chute>numerosecreto){
            textosDaTela ('p', 'O numero secreto é menor');
        } else{
            textosDaTela ('p', 'O numero secreto é maior');
        }
        tentativas++;

    }
}

function limparcampo () {
    chute= document.querySelector('input');
    chute.value = '';
    
}
//funcão sem parametro mas com retorno ↓
function gerarNumeroAleatorio () {
   let numeroescolhido= parseInt(Math.random () * numerolimite +1);
   let quantidadedeelementosdalista= listadenumerossorteados.length;

    if (quantidadedeelementosdalista==numerolimite){
        listadenumerossorteados= [];
    }

   if (listadenumerossorteados.includes(numeroescolhido)){
    return gerarNumeroAleatorio();
   } else{
    listadenumerossorteados.push(numeroescolhido)
    return numeroescolhido;
   }
}

function reiniciarJogo() {
    numerosecreto=gerarNumeroAleatorio()
    limparcampo()
    tentativas= 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disable',true)

}