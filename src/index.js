import { home } from "./init";
import { menue, contact } from "./tabs";

import "./style.css"


const tab = (() => {
    const content = document.getElementById("content")
    const tab = document.createElement("div")
    const homebtn = document.createElement("button")
    const menuebtn = document.createElement("button")
    const contactbtn = document.createElement("button")
    tab.classList.add("tab")
    homebtn.textContent = "Home"
    menuebtn.textContent = "Menue"
    contactbtn.textContent = "Contact"
    menuebtn.addEventListener("click", menue)
    homebtn.addEventListener("click", home)
    contactbtn.addEventListener("click", contact)
    tab.appendChild(homebtn)
    tab.appendChild(menuebtn)
    tab.appendChild(contactbtn)
    content.appendChild(tab)
    home()
})()
