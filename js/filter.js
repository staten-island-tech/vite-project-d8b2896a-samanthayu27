import { fooditems } from "./menu";

const menufiltered = [
    fooditems, 
 fooditems.filter(fooditems => fooditems.tag.includes("bread")),
 fooditems.filter(fooditems => fooditems.tag.includes("cake")),
 fooditems.filter(fooditems => fooditems.tag.includes("pastry")),
 fooditems.filter(fooditems => fooditems.tag.includes("tea")),
 fooditems.filter(fooditems => fooditems.tag.includes("coffee")),
 fooditems.filter(fooditems => fooditems.tag.includes ("blended")),
];


export {menufiltered}
