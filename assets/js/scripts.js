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

  let time = hours + ':' + minutes + ':' + seconds + ' ' + meridian + " ;)";

  let doggoClock = document.getElementById('doggo-clock')
  doggoClock.innerText = time;
};

// Update the time every half second (marginally better accuracy than every second better)
const updateTime = () => {
  displayCurrentTime();
};

let updateSpeed = 500;
let timeout = setInterval(updateTime, updateSpeed);

// Change the doggo button functionality

const doggoButton = document.getElementById('doggo-button')
const doggoImage = document.getElementById('doggo-image')

const changeImage = () => {
  doggoImage.src="assets/images/doggo_2.jpg"
};
