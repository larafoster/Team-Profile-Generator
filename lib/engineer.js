"use strict" 

const Employee = require('./employee')

class Engineer extends Employee {
    constructor(firstname, id, email, github){
        super(firstname,  id, email);
        this.github = github;
    };

//getFirstName, getId, and getEmail will come from employee since Engineer extends Employee
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;