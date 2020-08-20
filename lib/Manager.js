//requires employee class from Employee.js to extend
const Employee = require("./Employee.js");

//adds to the main class of employee for manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    //overrides the default of employee set in main class
    getRole() {
        const role = "Manager";
        return role;
    }
}

module.exports = Manager;