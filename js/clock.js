const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  if (hours <= 12) {
    const AM = hours;
    clock.innerText = `${AM}:${minutes}am`;
  } else if (hours > 12) {
    const PM = hours - 12;
    clock.innerText = `${PM}:${minutes}pm`;
  }
}

getClock();
setInterval(getClock, 1000);
