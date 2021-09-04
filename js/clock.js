const clock = document.querySelector("#clock");
const meridiem = document.querySelector("#meridiem");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  if (hours <= 12) {
    const AM = hours;
    clock.innerText = `${AM}:${minutes}.${seconds}`;
    meridiem.innerText = `AM`;
  } else if (hours > 12) {
    const PM = hours - 12;
    clock.innerText = `${PM}:${minutes}.${seconds}`;
    meridiem.innerText = `PM`;
  }
}

getClock();
setInterval(getClock, 1000);
