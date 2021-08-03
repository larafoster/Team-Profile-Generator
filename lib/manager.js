"use strict"

const Employee = require('./employee')

class Manager extends Employee {
    constructor(firstname, id, email, office){
        super(firstname, id, email);
        this.office = office;
    };

    getFirstName() {
        return this.firstname;
    }

    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getOffice() {
        return this.office;
    }
    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;