// ========================= Dark light mode js
let darkModeSave = localStorage.getItem("darkmode");
var darkModeBtn = document.querySelector(".darkMode");
var lightBtn = document.querySelector(".lightBtn");
var darkModeNav = document.querySelectorAll(".navBtn.navDark");

const enableDarkMode = () => {
  document.body.classList.add("dark_mode");
  localStorage.setItem("darkmode", "enabled");
  lightBtn.src = "img/moon.png";
  document.querySelector(".bg").style.backgroundColor = "#242629";
  for (var i = 0; i < darkModeNav.length; i++) {
    darkModeNav[i].classList.add("dark_mode_nav");
  }
}
const disableDarkMode = () => {
  document.body.classList.remove("dark_mode");
  localStorage.setItem("darkmode", null);
  lightBtn.src = "img/sun.png";
  document.querySelector(".bg").style.backgroundColor = "#ECEAEA";
  for (var i = 0; i < darkModeNav.length; i++) {
    darkModeNav[i].classList.remove("dark_mode_nav");
  }
}

if (darkModeSave === 'enabled') {
  enableDarkMode();
}

darkModeBtn.addEventListener("click", () => {
  let darkModeSave = localStorage.getItem("darkmode");
  if (darkModeSave !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})

// ========================= intro text random js
var textRandom = document.querySelector(".textRandom");
const textList = ["CREATIVE", "INTELLECTUAL", "PROGRESSIVE", "HUMOROUS", "ENTHUSIATIC"];
const colorList = ["#D17878", "#95D178", "#f5df4d", "#939597", "#FFB17F"];

var random = function () {
  var ranColor = Math.floor(Math.random() * colorList.length);
  textRandom.style.backgroundColor = colorList[ranColor];
  var ranText = Math.floor(Math.random() * textList.length)
  textRandom.innerText = textList[ranText];
}
random();
setInterval(() => {
  random()
}, 1500);

// setInterval(function() {
//         var ranColor = Math.floor(Math.random() * colorList.length);
//         textRandom.style.backgroundColor = colorList[ranColor];
//         var ranText = Math.floor(Math.random() * textList.length)
//         textRandom.innerText = textList[ranText];
//     },1500);


