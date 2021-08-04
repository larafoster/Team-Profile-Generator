"use strict"

const Employee = require('./employee')

class Manager extends Employee {
    constructor(firstname, id, email, office){
        super(firstname, id, email);
        this.office = office;
    };

//getFirstName, getId, and getEmail will come from employee since Engineer extends Employee

    getOffice() {
        return this.office;
    }
    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;