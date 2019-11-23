//Funcion Contador de Compras
let contadorCompras;

window.onload = function(){
    contadorCompras = localStorage.getItem("contador");
    
    if(contadorCompras != undefined){
        document.getElementById("cart-counter").innerHTML = contadorCompras;
    }
}

function comprarCurso(){

    contadorCompras = localStorage.getItem("contador");

    if(contadorCompras == undefined){
        var primeraCompra = 0;
        primeraCompra++;
        localStorage.setItem("contador", primeraCompra);
        document.getElementById("cart-counter").innerHTML = primeraCompra;
        
    }else{
        contadorCompras++;
        localStorage.setItem("contador", contadorCompras);
        document.getElementById("cart-counter").innerHTML = contadorCompras;
    }
}

/*boton menu
var btnMenu = document.getElementById("btn-menu");
var nav = document.getElementById("nav");

 btnMenu.addEventListener('click',function(){
    nav.classList.toggle('mostrar');
})*/

/*Preparacion Modal*/
var modal = document.getElementById("myModal");
var btn = document.getElementById("verDetalleCurso");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
  }
  
span.onclick = function() {
    modal.style.display = "none";
}
  
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}