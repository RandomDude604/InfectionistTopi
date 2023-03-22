function firstMessage() {
    document.getElementById("first-message").innerHTML = "Feel Free to Explore! I'm still learning as I'm making this sorry about the bugs and all! This should also be done sometime in life, no idea when, and if you're a procastinator like me.. then you'll understand";
  }

  setInterval(myTime, 1000);
function myTime() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark'){
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
  } else {
      setTheme('theme-light');
  }
})()

  setInterval(currentDate, 1000);
function currentDate() {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const d = new Date();
  let day = weekday[d.getDay()];
  document.getElementById("date").innerHTML = day;
}