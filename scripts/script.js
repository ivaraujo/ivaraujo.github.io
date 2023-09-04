//Botão topo
const btnTop = document.getElementById("btn-topo");

btnTop.addEventListener("click", function(){
    window.scrollTo(0,0);
});

function ocultar(){
    if(window.scrollY > 10){
        btnTop.style.display = "flex";
    }
    else{
        btnTop.style.display = "none";
    }
}
ocultar();