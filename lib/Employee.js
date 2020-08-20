// creates main class to be extended. Gathers name, id and email.
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    //default role of employee will be overriden in each subclass
    getRole() {
        const role = "Employee";
        return role;
    }
}

//export for use in subclasses
module.exports = Employee;
