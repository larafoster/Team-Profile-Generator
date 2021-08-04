"use strict" 

const Employee = require('./employee')

class Intern extends Employee {
    constructor(firstname, id, email, school){
        super(firstname, id, email);
        this.school = school;
    };

//getFirstName, getId, and getEmail will come from employee since Engineer extends Employee
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;