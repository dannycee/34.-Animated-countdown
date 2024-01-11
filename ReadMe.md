#Animated Countdown

This project is a simple and visually engaging animated countdown, designed to create anticipation and excitement. The countdown starts from 3 and counts down to 0, followed by a "Get Ready" message. After the countdown, the screen displays a bold "GO" message along with a replay button to restart the animation.

##Languages
HTML, CSS, Javascript

##How it Works
The project uses HTML, CSS, and JavaScript to create a visually appealing countdown animation. The key components include:

HTML Structure:

The countdown is structured with HTML elements, including a container for the countdown numbers (nums) and divs for the initial countdown (counter) and the final message (final).
The replay button is included to allow users to restart the animation.
CSS Styling:

The styling is done using CSS, including animations for hiding and showing elements with a scale effect.
The countdown numbers (nums) are styled to have a color and a bouncy rotation effect during the animation.
JavaScript Logic:

JavaScript is used to select HTML elements, manage CSS classes, and handle the countdown animation logic.
The runAnimation function sets up event listeners for the animation end event, determining when to switch between numbers and when to display the final message.
The resetDOM function resets the initial state of the DOM, allowing the replay button to restart the animation.
Main Functionalities
Countdown Animation:

The countdown numbers rotate with a bouncy effect as they appear and disappear.
The final message scales in with an animated effect.
Replay Button:

Users can click the "Replay" button to reset the countdown and start the animation again.
Dependencies
Font Awesome (v6.4.0) is used for icons, and it is linked via a CDN in the HTML head.
How to Use
Simply open the HTML file in a web browser to experience the animated countdown.
Click the "Replay" button to restart the countdown at any time.
Feel free to customize the styles, messages, and other aspects of the project to fit your specific needs.

##Credits
udemy course of Brad Traversy
"Sharpen your skills by building 50 quick, unique & fun mini projects"
