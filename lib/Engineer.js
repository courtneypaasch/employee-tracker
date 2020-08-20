//requires employee class from Employee.js to extend
const Employee = require("./Employee.js");

//adds to the parent class of employee for engineers
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    //overrides the default of employee set in parent class
    getRole() {
        const role = "Engineer";
        return role;
    }
}

module.exports = Engineer;