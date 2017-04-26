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
function selectColor(){
  var li = document.getElementsByClassName("color");
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
  var rosado = document.getElementById("rosado");

  li.addEventListener("click", function(){
    alert("hola");
  });

}
