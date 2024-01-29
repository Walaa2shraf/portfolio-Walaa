var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click",function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});

// if (navlist.classList.toggle("open")){
//     var element = document.getElementById("nav-list");
//     element.style.display="block";
// }
// else{
//     var element = document.getElementById("nav-list");
//     element.style.display="none";
// }