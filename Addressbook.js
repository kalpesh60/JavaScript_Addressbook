class Contact {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
}

let contact = new Contact("Ajay", "Dhalpe", "Panvel", "Panvel", "Mah", "502398", "8467387478", "ajay@gmail.com");
console.log(contact);