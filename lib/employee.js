"use strict" //Strict mode changes previously accepted "bad syntax" into real errors. w3schools

class Employee {
    constructor(firstname, lastname, id, email){
        this.firtname = firstname
        this.lastname = lastname
        this.id = id
        this.email = email
    };

    getFirstName() {
        return this.firtname
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
    getRole() {
        return 'Employee'
    }
};

module.exports = Employee