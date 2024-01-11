// Select all elements with class "nums" and nested span elements
const nums = document.querySelectorAll(".nums span");
// Select the element with class "counter"
const counter = document.querySelector(".counter");
// Select the element with class "final"
const finalMessage = document.querySelector(".final");
// Select the element with id "replay"
const replay = document.querySelector("#replay");

// Run the animation when the script is executed
runAnimation();

// Function to reset the DOM (Document Object Model) state
function resetDOM() {
  // Remove "hide" class from the counter element
  counter.classList.remove("hide");
  // Remove "show" class from the finalMessage element
  finalMessage.classList.remove("show");

  // Loop through each num element
  nums.forEach((num) => {
    // Reset the class value of each num element
    num.classList.value = "";
  });

  // Add "in" class to the first num element
  nums[0].classList.add("in");
}

// Function to run the animation
function runAnimation() {
  // Loop through each num element with its index
  nums.forEach((num, idx) => {
    // Calculate the index of the second-to-last num element
    const nextToLast = nums.length - 1;

    // Add an event listener for the "animationend" event
    num.addEventListener("animationend", (e) => {
      // Check if the animation name is "goIn" and the element is not the second-to-last
      if (e.animationName === "goIn" && idx !== nextToLast) {
        // Remove "in" class and add "out" class to the current num element
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        // If the animation name is "goOut" and there is a next sibling, add "in" class to the next sibling
        num.nextElementSibling.classList.add("in");
      } else {
        // If none of the above conditions are met, add "hide" class to counter and "show" class to finalMessage
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

// Add a click event listener to the replay button
replay.addEventListener("click", () => {
  // Reset the DOM state
  resetDOM();
  // Run the animation again
  runAnimation();
});
