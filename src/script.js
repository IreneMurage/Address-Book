// Business logic
function createContact(firstName, lastName, phoneNumber) {
  const contact = {};
  contact.firstName = firstName;
  contact.lastName = lastName;
  contact.phoneNumber = phoneNumber;
  return contact;
}

function createAddressBook() {
  const addressBook = {};
  addressBook.contacts = [];
  addressBook.addContact = function (contact) {
    addressBook.contacts.push(contact);
  };

  addressBook.findContact = function (firstName) {
    return addressBook.contacts.find(function (contact) {
      return contact.firstName === firstName;
    });
  };

  addressBook.deleteContact = function (firstName) {
    addressBook.contacts = addressBook.contacts.filter(function (contact) {
      return contact.firstName !== firstName;
    });
  };

  return addressBook;
}


const addressBook = createAddressBook();
const form = document.getElementById("contact-form");
const contactsList = document.getElementById("contacts-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const phoneNumber = document.getElementById("phone-number").value;

  const contact = createContact(firstName, lastName, phoneNumber);
  addressBook.addContact(contact);

  const li = document.createElement("li");
  li.textContent = contact.firstName + " " + contact.lastName + " (" + contact.phoneNumber + ")";
  contactsList.appendChild(li);

  form.reset();
});
