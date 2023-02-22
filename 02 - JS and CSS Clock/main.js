const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  if (seconds === 0) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = "all 0.05s";
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  if (minutes === 0 && seconds === 0) {
    minuteHand.style.transition = "none";
  } else {
    minuteHand.style.transition = "all 0.05s";
  }
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  if (hours === 0 && minutes === 0 && seconds === 0) {
    hourHand.style.transition = "none";
  } else {
    hourHand.style.transition = "all 0.05s";
  }
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setTime, 1000);
