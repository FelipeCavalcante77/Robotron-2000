/*Chegou a hora de colocar a mão na massa! No desafio desta aula você irá criar uma função anônima que retorne a frase “Fui clicado”. Esta função será aplicada em conjunto de um evento de clique.*/

var notas = document.querySelector("#calcular")

document.querySelector("#calcular").addEventListener("click", recebi)

function recebi(){
    console.log("Oii, fui clicado")
}