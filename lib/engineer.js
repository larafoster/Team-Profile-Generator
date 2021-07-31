"use strict" 

const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(firstname, lastname, id, email, github){
        super(firstname, lastname, id, email)
        this.github = github
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
    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
};

module.exports = Engineer