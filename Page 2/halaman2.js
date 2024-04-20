
let subMenu = document.getElementById("dropdown-browse");
let browse = document.getElementById("Browse");
function toggleMenu()
{
    subMenu.classList.toggle("open");
    browse.classList.toggle("open");
    document.addEventListener("mousedown", (event) => {
        if (!subMenu.contains(event.target) && !browse.contains(event.target)) {
            // Clicked outside the menu, remove "open" class
            subMenu.classList.remove("open");
            browse.classList.remove("open");
        }
    });
}

function navigateTo(page) {
    window.location.href = page;
}

let favLabel = document.getElementById("labelFav");
let butFav = document.getElementById("buttonFav");

function toggleFav() {
    if (favLabel.textContent === "Favorited") {
        favLabel.textContent = "Add to Favorite";
    } else {
        favLabel.textContent = "Favorited";
    }
    butFav.classList.toggle("open");
}

let labelWTR = document.getElementById("labelWTR");
let buttonWTR = document.getElementById("buttonWTR");

function toggleWTR()
{
    if (labelWTR.textContent === "Read") {
        labelWTR.textContent = "Want To Read";
    } else {
        labelWTR.textContent = "Read";
    }
    buttonWTR.classList.toggle("open");
}