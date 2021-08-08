const clockHours = document.getElementById("clock__hours");
const clockMinutes = document.getElementById("clock__minutes");
const clockSeconds = document.getElementById("clock__seconds");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockHours.innerText = `${hours}`;
  clockMinutes.innerText = `${minutes}`;
  clockSeconds.innerText = `${seconds}`;
}

getClock();
setInterval(getClock, 1000);
