//handle form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  addContact();
});

//use DOM manipulation to add the entered info to our list
const nameInput = document.querySelector('#name');
const numberInput = document.querySelector("#phone");
function addContact(){
}