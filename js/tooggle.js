let nav = document.querySelector("#nav");
let btnButton = document.querySelector("#btn-button");
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bis-brightness-high-fill")
const moonIcon = document.querySelector(".toggle .bi-moon")



btnButton.addEventListener("click", () => {
    btnButton.classList.toggle("active");
    nav.classList.toggle("active");
} )

document.querySelectorAll("#nav-link").forEach(n => n.addEventListener("click", () => {
    btnButton.classList.remove("active");
    nav.classList.remove("active");
}))


toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
})

