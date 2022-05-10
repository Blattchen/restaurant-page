import Pizza from "./pizza.png"
import Burger from "./burger.png"
import Call from "./phone.svg"
import Map from "./map.svg"
import Mail from "./mail.svg"

const menue = () => {
    const home = document.querySelector(".home")
    if (home) {
        home.remove()
    }
    const dom = document.getElementById("content")
    const content = document.createElement("div")
    const heading = document.createElement("h1")
    const mealOne = document.createElement("div")
    const mealTwo = document.createElement("div")
    const pizzaHeading = document.createElement("h3")
    const burgerHeading = document.createElement("h3")
    const pizzaPrice = document.createElement("h2")
    const burgerPrice = document.createElement("h2")
    const pizzaImg = new Image()
    const burgerImg = new Image()
    pizzaPrice.textContent = "10$"
    burgerPrice.textContent = "7$"
    pizzaHeading.textContent = "Delicious Pizza"
    burgerHeading.textContent = "Juicy Burger"
    burgerImg.src = Burger
    pizzaImg.src = Pizza
    mealOne.classList.add("meals")
    mealTwo.classList.add("meals")
    content.classList.add("home")
    heading.textContent = "Menue"
    mealOne.appendChild(pizzaImg)
    mealOne.appendChild(pizzaHeading)
    mealOne.appendChild(pizzaPrice)
    mealTwo.appendChild(burgerImg)
    mealTwo.appendChild(burgerHeading)
    mealTwo.appendChild(burgerPrice)
    content.appendChild(heading)
    content.appendChild(mealOne)
    content.appendChild(mealTwo)
    dom.appendChild(content)

}

const contact = () => {
    const home = document.querySelector(".home")
    if (home) {
        home.remove()
    }
    const dom = document.getElementById("content")
    const content = document.createElement("div")
    const heading = document.createElement("h1")
    const contact = document.createElement("div")
    const phoneNumber = document.createElement("div")
    const mailAddress = document.createElement("div")
    const location = document.createElement("div")
    const mapIcon = new Image()
    const mailIcon = new Image()
    const phoneIcon = new Image()
    mapIcon.src = Map
    mailIcon.src = Mail
    phoneIcon.src = Call
    content.classList.add("home")
    contact.classList.add("contact")
    heading.textContent = "Contact"
    phoneNumber.textContent = "0123456789"
    phoneNumber.appendChild(phoneIcon)
    mailAddress.textContent = "example@email.com"
    mailAddress.appendChild(mailIcon)
    location.textContent = "examplestreet 12, example City in the World 54258"
    location.appendChild(mapIcon)
    contact.appendChild(phoneNumber)
    contact.appendChild(mailAddress)
    contact.appendChild(location)
    content.appendChild(heading)
    content.appendChild(contact)
    dom.appendChild(content)
}

export { menue, contact }