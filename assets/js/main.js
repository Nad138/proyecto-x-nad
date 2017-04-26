var menu = document.getElementsByClassName("accordion");

for(var i=0;i<menu.length;i++){
  menu[i].onclick = function(){
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    }
    else{
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}



/*var colores = document.getElementsByTagName("li");
function selectColor(colores){
  for(var i=0;i<colores.length;i++){
    colores[0].onclick = function(){
       var color = colores[0].id;
       outfit.push(color);
     }
    }

}*/

  var outfit = [];
  var colores = document.getElementsByTagName("li");
  var color = colores[0];
  var blanco = color.id;
  colores[0].addEventListener("click",selectColor);
  function selectColor(color){
  outfit.push(blanco);
  }
  /*
  var blanco = document.getElementById("blanco");
  var marron = document.getElementById("marron");
  var rojo = document.getElementById("rojo");
  var naranja = document.getElementById("naranja");
  var amarillo = document.getElementById("amarillo");
  var verde = document.getElementById("verde-oscuro");
  var negro = document.getElementById("negro");
  var gris = document.getElementById("gris");
  var morado = document.getElementById("morado");
  var azul = document.getElementById("azul");
  var celeste = document.getElementById("celeste");
  var rosado = document.getElementById("rosado");*/


var pantalones = document.getElementsByClassName("pantalones");
var clase = pantalones[0];
var jeans = clase.value;
clase.addEventListener("click", checkbox);
function checkbox(){
  outfit.push(jeans);
}


var tops = document.getElementsByClassName("tops");
var clase = tops[0];
var blusa = clase.value;
clase.addEventListener("click", checkbox);
function checkbox(){
  outfit.push(blusa);
}

  var listo = document.getElementById("listo");
   listo.addEventListener("click", hola);

   function myOutfit(outfit){
    

   }
