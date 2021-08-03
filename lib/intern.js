"use strict" 

const Employee = require('./employee')

class Intern extends Employee {
    constructor(firstname, id, email, school){
        super(firstname, id, email);
        this.school = school;
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
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;