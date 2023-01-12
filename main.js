function firstMessage() {
    document.getElementById("first-message").innerHTML = "Feel Free to Explore! I'm still learning as I'm making this sorry about the bugs and all!";
  }

  setInterval(myTime, 1000);
function myTime() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}