// 🌟 Selecting Elements
const btn = document.getElementById("myButton"); // Select by ID
const para = document.querySelector(".myText"); // Select first element with class "myText"
const inputField = document.querySelector("#myInput"); // Select input field
const form = document.querySelector("#myForm"); // Select form

// 🌟 Modifying HTML & CSS
btn.innerText = "Click Me!"; // Changes button text
para.innerHTML = "<strong>Modified text!</strong>"; // Changes paragraph content (Supports HTML)
btn.style.backgroundColor = "blue"; // Changes button background color
btn.style.color = "white"; // Changes text color

// 🌟 Adding Event Listeners
btn.addEventListener("click", handleClick); // Attach click event
inputField.addEventListener("input", handleInputChange); // Listen to text input changes
form.addEventListener("submit", handleFormSubmit); // Attach submit event

// 🌟 Removing Event Listener after 5 seconds
setTimeout(() => {
  btn.removeEventListener("click", handleClick);
  console.log("Button click event removed.");
}, 5000);

// 🌟 Event Handler Functions
function handleClick() {
  console.log("Button clicked!");
  para.innerText = "Button was clicked!";
}

function handleInputChange(event) {
  console.log("Input changed: ", event.target.value);
}

function handleFormSubmit(event) {
  event.preventDefault(); // Prevents form from submitting & reloading page
  console.log("Form submission prevented.");
}

// 🌟 Event Bubbling & Capturing
const outerDiv = document.querySelector("#outerDiv");
const innerDiv = document.querySelector("#innerDiv");

outerDiv.addEventListener(
  "click",
  () => console.log("Outer DIV Clicked! (Bubbling)"),
  false
); // Bubbling (default) Can be prevented using event.preventDefault();
innerDiv.addEventListener(
  "click",
  () => console.log("Inner DIV Clicked! (Bubbling)"),
  false
);

outerDiv.addEventListener(
  "click",
  () => console.log("Outer DIV Clicked! (Capturing)"),
  true
); // Capturing
innerDiv.addEventListener(
  "click",
  () => console.log("Inner DIV Clicked! (Capturing)"),
  true
);
