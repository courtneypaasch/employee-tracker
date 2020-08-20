const newTeam = [
    {
    type: "list",
    message: "Would you like to create a new team?",
    name: "team",
    choices: ["Yes", "No"]
    }
]

const addMore = [
    {
        type: "list",
        message: "Would you like to add another employee?",
        name: "addEmployee",
        choices: ["Manager", "Engineer", "Intern", "No more team members"]
    }
]

const employeePrompts = [
    {
        type: "input",
        message: "Enter employee's name: ",
        name: "name"
    },

    {
        type: "input",
        message: "Enter employee id: ",
        name: "id"
     },

     {
         type: "input",
         message: "Enter employee email: ",
         name: "email"
     }
]

const managerPrompt = [
    {
        type: "input",
        message: "Enter employee office number: ",
        name: "officeNumber"
    }
]

const internPrompt = [
    {
        type: "input",
        message: "Enter intern's school name: ",
        name: "school"
    }
]

const engineerPrompt = [
    {
        type: "input",
        message: "Enter employee GitHub: ",
        name: "github"
    }
]

module.exports = {newTeam, addMore, employeePrompts, managerPrompt, internPrompt, engineerPrompt}