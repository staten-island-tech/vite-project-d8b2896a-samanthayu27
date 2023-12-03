import { menu } from "./tljmenu";
import { menufiltered } from "./filters";
import {DOMSelectors}

const DOMSelectors = {
    result: document.getElementById("result"),
    buttons: document.getElementById("button")
}

function result(arr){
    arr.array.forEach((menu) => DOMSelectors.result.insertAdjacentHTML{
        "beforeend",
        `
        <div></div>
        `
    });
}
function result(arr) {
    arr.forEach((menu) => DOMSelectors.result.insertAdjacentHTML(
        "beforeend", 
        `<div class="card">
        <h3 class = "name">${x.name}</h3>
        <img src="${x.pic}" class="cardimg">
        <h4 class = ${x.money}>Price</h4> 
    </div> `
))};

result(menu)

function remove() {
    const eeee = document.querySelectorAll(".result");
    eeee.forEach((aaaa)=> aaaa.remove());
};

DOMSelectors.buttons.forEach((button) => button.addEventListener("click",function(){
    let array = button.textContent
    let eeeee = menu.filter()
}))