var menuIcon=document.querySelector(".menu");
var sidebar=document.querySelector(".sidebar");
var contain=document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    contain.classList.toggle("large-container");
}
