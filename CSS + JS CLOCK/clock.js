
const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setTime() {
  const currentTime = new Date();

  const sec = currentTime.getSeconds();
  const secDegrees = (sec/60)*360;
  secHand.style.transform = `rotate(${secDegrees}deg)`;


  const min = currentTime.getMinutes();
  const minDegrees = (min/60)*360;
  minHand.style.transform = `rotate(${minDegrees}deg)`;


  const hour = currentTime.getHours();
  const hourDegrees = (hour/12)*360;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setTime, 1000)
