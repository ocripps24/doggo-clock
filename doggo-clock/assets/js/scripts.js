// Access the time and format it

const displayCurrentTime = () => {

  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = 'AM';

  if (hours >= 12) {
    meridian = "PM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let time = hours + ':' + minutes + ':' + seconds + ' ' + meridian;

  let doggoClock = document.getElementById('doggo-clock')
  doggoClock.innerText = time;
};

// Access the time and format it in 24 hour format

const displayCurrentDigitalTime = () => {

  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let timeDigital = hours + ':' + minutes + ':' + seconds;

  let doggoClock = document.getElementById('doggo-clock')
  doggoClock.innerText = timeDigital;
};

// Update the time every half second (marginally better accuracy than every second better)

const updateTime = () => {
  if (clockType == 0) {
    displayCurrentTime();
  } else if (clockType == 1) {
    displayCurrentDigitalTime();
  }
};

let updateSpeed = 500;
let timeout = setInterval(updateTime, updateSpeed);

// Switch between 12-hour and 24-hour formats

let clockType = 0;

const changeClock = () => {
  if(clockType == 0) {
    clockType++;
  } else if (clockType == 1) {
    clockType--;
  }
};

// Change the doggo button functionality

const doggoImage = document.getElementById('doggo-image')
let counter = 0;

const changeImage = () => {
  if(counter == 0){
    doggoImage.src="assets/images/doggo_2.jpg"
    counter++;
  } else if(counter == 1){
    doggoImage.src="assets/images/doggo_1.jpg"
    counter--;
  }
};
