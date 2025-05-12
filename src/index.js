//imported js contains array to be used for creating HTML elements

import "./styles.css";
import {menu , location , about} from "./mods.js";
const content = document.getElementById("body");
const menuBtn = document.getElementById("menu");
const locationBtn = document.getElementById("location");
const aboutBtn = document.getElementById("about");

class DOMCreator {
    constructor(elements) {
        this.elements = elements;
    }

    createElements() {
        const container = document.createElement("div");
        container.classList.add("card");
        this.elements.forEach(element => {
            const el = document.createElement(element.type);
            //used if statments in case future divs are missing a classname or desc.
            if (element.content){
                const head = document.createElement("h3");
                head.textContent = element.content;
                head.classList.add("title");
                el.appendChild(head);

            }
            if (element.className) el.classList.add(element.className);
            
            if (element.description) {
                const desc = document.createElement("p");
                desc.textContent = element.description;
                desc.classList.add("description");
                el.appendChild(desc);
            }

            container.appendChild(el);
        });
        return container;
    }
}

menuBtn.addEventListener("click",()=>{
    const menuInfo = new DOMCreator(menu);
    content.innerHTML = '';
    content.appendChild(menuInfo.createElements());
});

locationBtn.addEventListener("click", ()=>{
    const locationInfo = new DOMCreator(location);
    content.innerHTML = '';
    content.appendChild(locationInfo.createElements());
});

aboutBtn.addEventListener("click", ()=>{
    const aboutInfo = new DOMCreator(about);
    content.innerHTML = '';
    content.appendChild(aboutInfo.createElements());
});