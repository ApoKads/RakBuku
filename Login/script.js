document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin') {
      showMessage('success', 'Login successful!');
    } else {
      showMessage('error', 'Invalid username or password');
    }
  });
  

var usernameInput = document.getElementById('username');
usernameInput.addEventListener('focus', function() {
  if (this.value === 'Username') {
    this.value = '';
  }
});
usernameInput.addEventListener('blur', function() {
  if (this.value === '') {
    this.value = 'Username';
  }
});

var passwordInput = document.getElementById('password');
passwordInput.addEventListener('focus', function() {
  if (this.value === 'Password') {
    this.value = '';
    this.type = 'password'; 
  }
});
passwordInput.addEventListener('blur', function() {
  if (this.value === '') {
    this.value = 'Password';
    this.type = 'text'; 
  }
});


usernameInput.value = 'Username';
passwordInput.value = 'Password';
passwordInput.type = 'text'; 


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