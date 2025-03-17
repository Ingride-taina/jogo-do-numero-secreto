//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo () {
    let inputAmigo= document.getElementById ("amigo");
    let nomeDoAmigo=inputAmigo.value;
   

    if(!nomeDoAmigo){
        alert ('digite um nome válido');
        return;
    }  
        // o metodo push adicona um novo elemento ao array 
    listaDeAmigos.push(nomeDoAmigo);
    inputAmigo.value= "";
    inputAmigo.focus();
    console.log (listaDeAmigos) 
    atualizarLista();

}

function atualizarLista() {
    let listaAmigos=document.getElementById("listaAmigos");
    listaAmigos.innerHTML= "";

    for (let i = 0; i< listaDeAmigos.length; i++) {
        let item=document.createElement ("li");
        item.textContent= listaDeAmigos[i];
        listaAmigos.appendChild(item);

    } 
}

function sortearAmigo() {
    if (listaDeAmigos.length===0){
        alert('Nenhum amigo foi adicionado :(');
        return;
    }
    let amigosorteado= listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    let resultado = document.getElementById ("resultado");
    resultado.innerHTML=`o amigo sorteado foi : ${amigosorteado}`;

    let limparlista= document.getElementById("listaAmigos");
    limparlista.innerHTML="";
    listaDeAmigos=[];
}
function novojogo() {
   
    listaDeAmigos = [];

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 


    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    alert("Jogo reiniciado!");
}