function renderTime(params) {
  let time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let format = document.getElementById("format");
  // let milliseconds = time.getMilliseconds();

  if (hours > 12) {
    hours -= 12;
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  // document.getElementById("milliseconds").innerHTML = milliseconds;

  if (format < 12) {
    format.innerText = "AM";
  } else {
    format.innerText = "PM";
  }
}

setInterval(renderTime, 0.001);
