import Pizza from "./pizza.png"
import Burger from "./burger.png"

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
}

export { menue, contact }