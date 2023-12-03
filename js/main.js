import { fooditems } from "./menu";
import "../styles/style.css";

const DOMSelectors = {
    result: document.querySelector(".result"),
    card: document.querySelector(".card"),
    img: document.querySelector(".img"),
    name: document.querySelector(".name"),
    calories: document.querySelector(".calories"),
    price: document.querySelector(".price"),
    bread: document.querySelector(".bread"),
    cake: document.querySelector(".cake"),
    pastry: document.querySelector(".pastry"),
    coffee: document.querySelector(".coffee"),
    tea: document.querySelector(".tea"),
    blended: document.querySelector(".blended"),
    filters: document.querySelector(".filters")
};

function makecard(arr) {
    arr.forEach((fooditem) => DOMSelectors.card.insertAdjacentHTML("beforeend",
        `
        <div class="profile">
            <h2>${fooditem.name}</h2>
            <img src="${fooditem.img}" />
            <h3>${fooditem.calories}</h3>
            <h3>${fooditem.price}</h3>
        </div>
        `
    ));
}

makecard(fooditems);

DOMSelectors.filters.forEach((btn) => btn.addEventListener("click", function () {
    let arrays = btn.textContent;
    let newArr = fooditems.filter((fooditem) => fooditem.tag === arrays);
    makecard(newArr);
}));
