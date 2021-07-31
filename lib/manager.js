"use strict"

const Employee = require('./Employee')

class Manager extends Employee {
    constructor(firstname, lastname, id, email, office){
        super(firstname, lastname, id, email)
        this.office = office
    };

    getFirstName() {
        return this.firstname
    }
    getLastName() {
        return this.lastname
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getOffice() {
        return this.office
    }
    getRole() {
        return 'Manager'
    }
};

module.exports = Manager