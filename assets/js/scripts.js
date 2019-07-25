const displayCurrentTime = () => {

  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = 'AM';

  if (hours >= 12) {
    meridian = "PM";
  }

  let time = hours + ':' + minutes + ':' + seconds + ' ' + meridian + ";)";

  let doggoClock = document.getElementById('doggo-clock')
  doggoClock.innerText = time;
};

displayCurrentTime();
