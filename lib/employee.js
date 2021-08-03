"use strict" //Strict mode changes previously accepted "bad syntax" into real errors. w3schools

class Employee {
    constructor(firstname, id, email){
        this.firstname = firstname;
        this.id = id;
        this.email = email;
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
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;