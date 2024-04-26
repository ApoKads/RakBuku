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

document.querySelector('.editable-text').addEventListener('focus', function() {
    if (this.innerText == 'Input your opinion here...') {
        this.innerText = '';
    }
});

// Star Review
function fillStars(index) {
    const stars = document.querySelectorAll('.stars label');
    stars.forEach((star, i) => {
      star.classList.remove('checked', 'half');
      if (i < index) {
        star.classList.add('checked');
      }
    });
  
    const decimal = index - 0.5;
    if (decimal >= 0) {
      stars[index - 1].classList.add('half');
    }
  
    document.getElementById('rating-input').value = index;
}
  
function resetStars() {
    const stars = document.querySelectorAll('.stars label');
    stars.forEach((star) => {
      star.classList.remove('checked', 'half');
    });
  
    const ratingInput = document.getElementById('rating-input');
    ratingInput.value = '';
}

// Calender started
let display = document.querySelector(".display");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");
let days = document.querySelector(".days");
let selected = document.querySelector(".selected");

let dateToday = new Date();

let year = dateToday.getFullYear();
let month = dateToday.getMonth();

let formattedDate = dateToday.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
});
display.innerHTML = `${formattedDate}`;

function displayCalendar() {
    const firstDay = new Date(year, month, 1);
    const firstDayIndex = firstDay.getDay(); 
    const lastDay = new Date(year, month + 1, 0);
    const numberOfDays = lastDay.getDate(); 

    for (let x = 1; x <= firstDayIndex; x++) {
        let div = document.createElement("div");
        div.innerHTML += "";
        days.appendChild(div);
    }

    for (let i = 1; i <= numberOfDays; i++) {
        let div = document.createElement("div");
        let currentDate = new Date(year, month, i);
        div.dataset.date = currentDate.toDateString();
        div.innerHTML += i;
        days.appendChild(div);
        if (
          currentDate.getFullYear() === new Date().getFullYear() &&
          currentDate.getMonth() === new Date().getMonth() &&
          currentDate.getDate() === new Date().getDate()
        ) {
          div.classList.add("current-date");
        }
      }
}
displayCalendar();

function displaySelected() {
    const dayElements = document.querySelectorAll(".containerCalender:first-child .days div");
    // Gunakan selector untuk kalender pertama dengan ".containerCalender:first-child"
    dayElements.forEach((day) => {
      day.addEventListener("click", (e) => {
        const selectedDate = e.target.dataset.date;
        selected.innerHTML = `Selected Date : ${selectedDate}`;
      });
    });
}
displaySelected();

previous.addEventListener("click", () => {
    days.innerHTML = "";
    selected.innerHTML = "";
    if (month <= 0) {
      month = 11;
      year = year - 1;
    } else {
      month = month - 1;
    }
    console.log(month);
    dateToday.setFullYear(year);
    dateToday.setMonth(month);
    displayCalendar();
    displaySelected();
    let formattedDate = dateToday.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
    });
    display.innerHTML = `${formattedDate}`;
});

next.addEventListener("click", () => {
    days.innerHTML = "";
    selected.innerHTML = "";
    if (month >= 11) {
      month = 0;
      year = year + 1;
    } else {
      month = month + 1;
    }
    dateToday.setFullYear(year);
    dateToday.setMonth(month);
    displayCalendar();
    displaySelected();
    let formattedDate = dateToday.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
    });
    display.innerHTML = `${formattedDate}`;
});

// Calender Finished
let display2 = document.querySelectorAll(".display")[1];
let previous2 = document.querySelectorAll(".left")[1];
let next2 = document.querySelectorAll(".right")[1];
let days2 = document.querySelectorAll(".days")[1];
let selected2 = document.querySelectorAll(".selected")[1];

let dateToday2 = new Date();

let year2 = dateToday2.getFullYear();
let month2 = dateToday2.getMonth();

let formattedDate2 = dateToday2.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
});
display2.innerHTML = `${formattedDate2}`;

function displayCalendar2() {
    const firstDay2 = new Date(year2, month2, 1);
    const firstDayIndex2 = firstDay2.getDay(); 
    const lastDay2 = new Date(year2, month2 + 1, 0);
    const numberOfDays2 = lastDay2.getDate(); 

    for (let x = 1; x <= firstDayIndex2; x++) {
        let div = document.createElement("div");
        div.innerHTML += "";
        days2.appendChild(div);
    }

    for (let i = 1; i <= numberOfDays2; i++) {
        let div = document.createElement("div");
        let currentDate2 = new Date(year2, month2, i);
        div.dataset.date = currentDate2.toDateString();
        div.innerHTML += i;
        days2.appendChild(div);
        if (
          currentDate2.getFullYear() === new Date().getFullYear() &&
          currentDate2.getMonth() === new Date().getMonth() &&
          currentDate2.getDate() === new Date().getDate()
        ) {
          div.classList.add("current-date");
        }
      }
}
displayCalendar2();

function displaySelected2() {
    const dayElements2 = document.querySelectorAll(".containerCalender:last-child .days div");
    // Gunakan selector untuk kalender kedua dengan ".containerCalender:last-child"
    dayElements2.forEach((day) => {
      day.addEventListener("click", (e) => {
        const selectedDate2 = e.target.dataset.date;
        selected2.innerHTML = `Selected Date : ${selectedDate2}`;
      });
    });
}
displaySelected2();

previous2.addEventListener("click", () => {
    days2.innerHTML = "";
    selected2.innerHTML = "";
    if (month2 <= 0) {
      month2 = 11;
      year2 = year2 - 1;
    } else {
      month2 = month2 - 1;
    }
    console.log(month2);
    dateToday2.setFullYear(year2);
    dateToday2.setMonth(month2);
    displayCalendar2();
    displaySelected2();
    let formattedDate2 = dateToday2.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
    });
    display2.innerHTML = `${formattedDate2}`;
});

next2.addEventListener("click", () => {
    days2.innerHTML = "";
    selected2.innerHTML = "";
    if (month2 >= 11) {
      month2 = 0;
      year2 = year2 + 1;
    } else {
      month2 = month2 + 1;
    }
    dateToday2.setFullYear(year2);
    dateToday2.setMonth(month2);
    displayCalendar2();
    displaySelected2();
    let formattedDate2 = dateToday2.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
    });
    display2.innerHTML = `${formattedDate2}`;
});

function navigateTo(page) {
  window.location.href = page;
}