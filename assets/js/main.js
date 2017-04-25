var menu = document.getElementsByClassName("accordion");

for(var i=0;i<menu.length;i++){
  menu[i].onclick = function(){
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if(panel.style.display === "block"){
      panel.style.display = "none";
    }
    else{
      panel.style.display = "block";
    }
  }
}
