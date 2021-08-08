const calender = document.getElementById("calender");

function getClock() {
  const date = new Date();
  const years = String(date.getFullYear()).padStart(4, "0");
  const months = String(date.getMonth() + 1).padStart(2, "0");
  const days = String(date.getDate()).padStart(2, "0");
  calender.innerText = `${years}:${months}:${days}`;
}

getClock();
setInterval(getClock, 1000);
