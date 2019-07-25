# JavaScript Clock App

## Welcome

This is a simple JavaScript app to show a fun clock. I am using the project to develop my skills in JavaScript as well as using SASS for the first time.

## Process

1. Setup basic HTML structure and various images/css/sass/js files.

2. Work out how to access time in JavaScript
- https://tecadmin.net/get-current-date-time-javascript/
- https://www.tutorialspoint.com/es6/es6_date

3. Make the clock appear on the page, this actually took more a lot longer than it should have done. I had to go through and fix a couple of typos and remember to actually call the function.
- https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock

4. Get the clock to update itself rather than only on refresh. There seem to be two ways to do this:
- setTimeout(function, milliseconds) Documentation explains that this runs a function after a set number of milliseconds. https://www.w3schools.com/jsref/met_win_settimeout.asp
- setInterval(function, milliseconds) Very similar but just runs a function at set intervals. https://www.w3schools.com/jsref/met_win_setinterval.asp
- In the end I got the setInterval function to work so I went with that

5. Set the picture and implement button functionality to change it. An easy way to do this is have a state change of the image src when the button is clicked.
- https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb
- http://javascript-coder.com/button/javascript-button-p1.phtml
- https://stackoverflow.com/questions/8783984/html-button-change-image-source

6. The last step was easy enough to implement but really I wanted the button to cycle through images.
- this approach uses if / else statements and explicit image names https://stackoverflow.com/questions/35174193/how-do-i-cycle-through-images-with-a-single-button
- this approach uses a counter method, which is quite cool and potentially more expandable if you're adding lots of images with similar file names https://stackoverflow.com/questions/25291730/change-images-on-click-cycle-through-3-images

7. So the main functionality is all implemented at this stage so the next step is to add some styling to the page.
- step 1 - import fonts and link to css file and check the link works with a test style attribute
- step 2 - apply styling to the various elements: headings, image, button
- step 3 - align items as desired
