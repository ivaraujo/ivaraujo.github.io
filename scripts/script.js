//Botão topo
const btnTop = document.getElementById("btn-topo");

btnTop.addEventListener("click", function(){
    window.scrollTo(0,0);
});

document.addEventListener("scroll", ocultar);

function ocultar(){
    if(window.scrollY > 150){
        btnTop.style.display = "flex";
    }
    else{
        btnTop.style.display = "none";
    }
}