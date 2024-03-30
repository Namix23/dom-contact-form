//handle form submission
const form = document.getElementById("contact-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  addContact();
});

//use DOM manipulation to add the entered info to our list
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#phone");
const contactList = document.getElementById("contact-list"); 

function addContact() {
  if (nameInput.value == "" || numberInput.value == ""){
  alert("contact is missing info");
  return;
}

//add entry to contact list
let listItem = document.createElement ("li");
contactList.append(listItem);
listItem.innerHTML = `<span class="name">${nameInput.value}</span> ${numberInput.value}`;

nameInput.value = "";
numberInput.value = "";
}

const formatBtn = document.getElementById("format");

function formatContacts() {
  alert('hi');
}

formatBtn.addEventListener("click", formatContacts);