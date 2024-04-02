//handle form submission
const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addContact();
  formatContacts();
});

//use DOM manipulation to add the entered info to our list
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#phone");
const contactList = document.getElementById("contact-list");

function addContact() {
  if (nameInput.value == "" || numberInput.value == "") {
    alert("contact is missing info");
    return;
  }

  //add entry to contact list
  let listItem = document.createElement("li");
  contactList.append(listItem);
  listItem.innerHTML = `<span class= "name"> ${nameInput.value}</span> ${numberInput.value}`;

  nameInput.value = "";
  numberInput.value = "";
}

//format btn
const formatBtn = document.getElementById("format");

function formatContacts() {
  //document.get
  let contacts = document.querySelectorAll("#contact-list li");

  //loop through each contact
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    contact.className = "contact";
    // contact.classList.add = "contact";
    // contact.style.backgroundColor = "orange";
    createX();
  }

  //
  function createX(liNode) {
    for (let i = 0; i < liNode.children.length; i++) {
      let currentChild = liNode.children[i];
      if (currentChild.classList.contains()) {
        return;
      }
    }
    let xBtn = document.createElement("span");
    xBtn.innerHTML = "x";
    xBtn.classList.add("x");
    liNode.append(xBtn);
    xBtn.addEventListener("click", function () {
      liNode.remove();
    });
  }
}

formatBtn.addEventListener("click", formatContacts);