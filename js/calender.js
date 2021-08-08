const calender = document.getElementById("calender");

const Month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function getClock() {
  const date = new Date();
  const years = String(date.getFullYear()).padStart(4, "0");
  const months = Month[date.getMonth()].padStart(2, "0");
  const days = String(date.getDate()).padStart(2, "0");
  calender.innerText = `${months} ${days}, ${years}`;
}

getClock();
setInterval(getClock, 1000);
