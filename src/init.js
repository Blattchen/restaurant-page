
const home = () => {
    const home = document.querySelector(".home")
    if (home) {
        home.remove()
    }
    const dom = document.getElementById("content")
    const content = document.createElement("div")
    const heading = document.createElement("h1")
    const openHours = document.createElement("div")
    const openheading = document.createElement("h3")
    const div = document.createElement("div")
    const Sunday = document.createElement("p")
    const Monday = document.createElement("p")
    const Tuesday = document.createElement("p")
    const Wednesday = document.createElement("p")
    const Thursday = document.createElement("p")
    const Friday = document.createElement("p")
    const Saturday = document.createElement("p")
    div.classList.add("hometxt")
    content.classList.add("home")
    Sunday.textContent = "Sunday: 8am - 8pm"
    Monday.textContent = "Monday: 6am - 6pm"
    Tuesday.textContent = "Tuesday: 6am - 6pm"
    Wednesday.textContent = "Wednesday: 8am - 8pm"
    Thursday.textContent = "Thursday: 6am - 10pm"
    Friday.textContent = "Friday: 6am - 10pm"
    Saturday.textContent = "Saturday: 8am - 10pm"
    openheading.textContent = "Open Hours:"
    div.textContent = `A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services`
    heading.textContent = "Welcome to Blattchen Resturant"
    openHours.appendChild(openheading)
    openHours.appendChild(Sunday)
    openHours.appendChild(Monday)
    openHours.appendChild(Tuesday)
    openHours.appendChild(Wednesday)
    openHours.appendChild(Thursday)
    openHours.appendChild(Friday)
    openHours.appendChild(Saturday)
    content.appendChild(heading)
    content.appendChild(openHours)
    content.appendChild(div)
    dom.appendChild(content)
}

export { home }