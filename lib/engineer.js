"use strict" 

const Employee = require('./employee')

class Engineer extends Employee {
    constructor(firstname, id, email, github){
        super(firstname,  id, email);
        this.github = github;
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
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;