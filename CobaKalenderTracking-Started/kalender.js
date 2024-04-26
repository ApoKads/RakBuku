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

        if (i === 4) {
          let img = document.createElement("img");
          img.src = "../CobaKalenderTracking-Started/Sources/Data-buku/buku-1.png"; 
          // img1.classList.add("image1");
          div.appendChild(img);

          let img2 = document.createElement("img");
          img2.src = "../CobaKalenderTracking-Started/Sources/Data-buku/rate-star1.png";
          // img2.classList.add("image2");
          div.appendChild(img2);

          let text1 = document.createElement("textFinished");
          text1.textContent = "Finished";
          // text2.classList.add("text");
          div.appendChild(text1);
        } 

        if (i === 17) {
          let img3 = document.createElement("img");
          img3.src = "../CobaKalenderTracking-Started/Sources/Data-buku/buku-2.png"; 
          // img1.classList.add("image1");
          div.appendChild(img3);

          let img4 = document.createElement("img");
          img4.src = "../CobaKalenderTracking-Started/Sources/Data-buku/rate-star2.png";
          // img2.classList.add("image2");
          div.appendChild(img4);

          let text2 = document.createElement("textFinished");
          text2.textContent = "Finished";
          // text2.classList.add("text");
          div.appendChild(text2);
        } 

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

let but  = document.getElementById("p");
function displaySelected() {
  const dayElements = document.querySelectorAll(".containerCalender:first-child .days div");
  // Gunakan selector untuk kalender pertama dengan ".containerCalender:first-child"
  dayElements.forEach((day) => {
    day.addEventListener("click", (e) => {
      const selectedDate = e.target.dataset.date;
      selected.innerHTML = `Selected Date : ${selectedDate}`;
      but.classList.add("open");
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

// var daysContainer = document.querySelector('.days');
// daysContainer.addEventListener('click', function(event) {
// var target = event.target;
  
// if (target.matches('.days div')) {
//     var previousButton = document.querySelector('.custom-button');
//     if (previousButton) {
//       previousButton.remove();
//     }
    
//     var button = document.createElement('button');
//     button.className = 'custom-button';
//     button.textContent = 'Select';
    
//     var displaySelected = document.querySelector('.display-selected');
//     displaySelected.appendChild(button);
//   }
// });

function navigateTo(page) {
  window.location.href = page;
}

// // Mendapatkan tombol 'Select'
// var button = document.querySelector('.custom-button');

// // Menambahkan event listener untuk saat tombol diklik
// button.addEventListener('click', function() {
//     // Pindah ke halaman HTML lain
//     window.location.href = '../MyBooks/index.html';
// });