//requires employee class from Employee.js to extend
const Employee = require("./Employee.js");

//adds to the parent class of employee for interns
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    //overrides the default of employee set in parent class
    getRole() {
        const role = "Intern";
        return role;
    }
}

module.exports = Intern;