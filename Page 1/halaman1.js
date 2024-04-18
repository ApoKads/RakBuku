const tabMenu = document.querySelector(".trending-atas")

let activeDrag = false;

tabMenu.addEventListener("mousemove",(drag)=>{
    if(!activeDrag)return;
    tabMenu.scrollLeft -=drag.movementX;
});

tabMenu.addEventListener("mousedown",()=>{
    activeDrag = true;
});

document.addEventListener("mouseup", ()=>{
    activeDrag=false;
})


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

let best = document.getElementById("best");
let viewDropDown = document.getElementById("best-luar-dropdown");
let viewBest = document.getElementById("best-luar");
    function toggleDropBest()
    {
        best.classList.toggle("open");
        viewDropDown.classList.toggle("open");
        viewBest.classList.toggle("open");
    }

function navigateTo(page) {
    window.location.href = page;
}