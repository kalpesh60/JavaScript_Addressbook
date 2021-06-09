const nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
const addressRegex = RegExp('^[A-Za-z0-9/,]{4,}$');
const zipRegex = RegExp('^[1-9]{1}[0-9]{5}$');
const phoneRegex = RegExp('^[1-9]{1}[0-9]{9}$');
const emailRegex = RegExp('^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$');

class Contact {
    constructor(...params) {
        if (!nameRegex.test(params[0])) throw "first name is invalid"; {
            this.firstName = params[0];
        }
        if (!nameRegex.test(params[1])) throw "last name is invalid"; {
            this.lastName = params[1];
        }
        if (!addressRegex.test(params[2])) throw "address is invalid"; {
            this.address = params[2];
        }
        if (!addressRegex.test(params[3])) throw "city is invalid"; {
            this.city = params[3];
        }
        if (!addressRegex.test(params[4])) throw "state is invalid"; {
            this.state = params[4];
        }
        if (!zipRegex.test(params[5])) throw "zip is invalid"; {
            this.zip = params[5];
        }
        if (!phoneRegex.test(params[6])) throw "phoneNumber is invalid"; {
            this.phoneNumber = params[6];
        }
        if (!emailRegex.test(params[7])) throw "email is invalid"; {
            this.email = params[7];
        }
    }
}

let addressbookArray = [];

function addContacts(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    try {
        let contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
        addressbookArray.push(contact);
    } catch (e) {
        console.error(e);
    }
}

addContacts("Ajay", "Dhalpe", "Panvel", "Panvel", "Mahara", "502398", "8467387478", "ajay@gmail.com");
addContacts("Vijay", "Dhalpe", "Panvel", "Mumbai", "Mahara", "502598", "8467387677", "vijay@gmail.com");
console.log(addressbookArray);

function findFirstName(contact) {
    return contact.firstName.includes("Ajay")
}
console.log(addressbookArray.find(findFirstName));