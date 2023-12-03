import "../style/style.css"

document.querySelector(".theme").addEventListener("click", function () {
   if (document.body.classList.contains("warmwhite")) {
       document.body.classList.add("normal");
       document.body.classList.remove("warmwhite");
   } else {
       document.body.classList.add("warmwhite");
       document.body.classList.remove("normal");
   }
});

document.querySelector(".theme1").addEventListener("click", function () {
   if (document.body.classList.contains("coolwhite")) {
       document.body.classList.add("normal");
       document.body.classList.remove("coolwhite");
   } else {
       document.body.classList.add("coolwhite");
       document.body.classList.remove("normal");
   }
});
