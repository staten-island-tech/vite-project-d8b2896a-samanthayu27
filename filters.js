import { menu } from "./tljmenu";

const menufiltered = {
    breadfilter: menu.filter(menu => menu.tag.includes("bread")),
    cakefilter: menu.filter(menu => menu.tag.includes("cake")),
    pastryfilter: menu.filter(menu => menu.tag.includes("pastry")),
    teafilter: menu.filter(menu => menu.tag.includes("tea")),
    coffeefilter: menu.filter(menu => menu.tag.includes("coffee")),
    blendedfilter: menu.filter(menu => menu.tag.includes ("blended")),
};

export {menufiltered}

