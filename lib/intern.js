"use strict" 

const Employee = require('./Employee')

class Intern extends Employee {
    constructor(firstname, lastname, id, email, school){
        super(firstname, lastname, id, email)
        this.school = school
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
    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern'
    }
};

module.exports = Intern