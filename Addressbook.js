const prompt = require('prompt-sync')();
const NAME_REGEX = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
const ADDRESS_REGEX = RegExp('^[A-Za-z0-9/,]{4,}$');
const ZIP_REGEX = RegExp('^[1-9]{1}[0-9]{5}$');
const PHONE_REGEX = RegExp('^[1-9]{1}[0-9]{9}$');
const EMAIL_REGEX = RegExp('^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$');

class Contact {
    constructor(...params) {
        if (!NAME_REGEX.test(params[0])) throw "first name is invalid"; {
            this.firstName = params[0];
        }
        if (!NAME_REGEX.test(params[1])) throw "last name is invalid"; {
            this.lastName = params[1];
        }
        if (!ADDRESS_REGEX.test(params[2])) throw "address is invalid"; {
            this.address = params[2];
        }
        if (!ADDRESS_REGEX.test(params[3])) throw "city is invalid"; {
            this.city = params[3];
        }
        if (!ADDRESS_REGEX.test(params[4])) throw "state is invalid"; {
            this.state = params[4];
        }
        if (!ZIP_REGEX.test(params[5])) throw "zip is invalid"; {
            this.zip = params[5];
        }
        if (!PHONE_REGEX.test(params[6])) throw "phoneNumber is invalid"; {
            this.phoneNumber = params[6];
        }
        if (!EMAIL_REGEX.test(params[7])) throw "email is invalid"; {
            this.email = params[7];
        }
    }
}

function editContact() {
    if (addressBookArray.length == 0) {
        console.log("Addressbook is empty");
    } else {
        let name = prompt("Enter the name who you want to edit: ");
        let nameChange = prompt("Enter new name: ");
        let search = addressBookArray.find((contact) => contact.firstName == name);
        if (search == undefined) {
            console.log("No such contact");
        } else {
            addressBookArray.find((contact) => contact.firstName == name).firstName = nameChange;
            console.log(addressBookArray);
        }
    }
}

function deleteContact() {
    if (addressBookArray.length == 0) {
        console.log("Addressbook is empty");
    } else {
        let name = prompt("Enter the name who you want to delete: ");
        let search = addressBookArray.find((contact) => contact.firstName == name);
        if (search == undefined) {
            console.log("No such contact");
        } else {
            addressBookArray.pop(addressBookArray.find((contact) => contact.firstName == name));
            console.log("Deleted successfully!")
            console.log(addressBookArray);
        }
    }
}

let addressBookArray = [];
let choice = 0;
do {
    choice = prompt("Enter 1.Add contact 2.Edit Contact 3.Delete contact 4.Exit ");
    if (choice == 1) {
        let firstName = prompt("Enter the first name :");
        let lastName = prompt("Enter the last name :");
        let address = prompt("Enter the address :");
        let city = prompt("Enter the city:");
        let state = prompt("Enter the state :");
        let zip = prompt("Enter the zip code :")
        let phoneNumber = prompt("Enter the phone Number :");
        let email = prompt("Enter the emailId :");
        try {
            var contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
            addressBookArray.push(contact);
            console.log(addressBookArray);
        } catch (e) {
            console.error(e);
        }
    } else if (choice == 2) {
        editContact();
    } else if (choice == 3) {
        deleteContact();
    }
} while (choice != 0);