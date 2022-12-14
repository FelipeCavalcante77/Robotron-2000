function click(){

    var esvaziar = document.querySelectorAll("[data-controle]") //todos elementos

    esvaziar.forEach((elemento) => {
        elemento.addEventListener("click", (evento) => {
            manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        })
    })

    function manipulaDados(operacao,esvaziar){

        var tintas = document.querySelector('.esvaziar')

        if(operacao === tintas){
            
        }

    }

}