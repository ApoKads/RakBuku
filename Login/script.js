
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

let form = document.getElementById("loginForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  let user = document.getElementById("username")
  let pass = document.getElementById("password")
  let error = document.getElementById("errorText")
  
  user.classList.remove("active")
  pass.classList.remove("active")
  error.classList.remove("active")
  if(user.value.length < 1)
    {
      error.innerText = "Username Must Be Filled"
      user.classList.add("active")
      error.classList.add("active")
      return;
    }
  else if(!user.value.endsWith("@rakbuku.com"))
    {
      error.innerText = "Username Must End With '@rakbuku.com'"
      user.classList.add("active")
      error.classList.add("active")
      return;
    }
  else if(pass.value.length < 1)
      {
        error.innerText = "Password Must Be Filled"
        pass.classList.add("active")
        error.classList.add("active")
        return;
      }
    else{
      window.open("../ProfilePageKiel/profilepage.html");
    }
});


