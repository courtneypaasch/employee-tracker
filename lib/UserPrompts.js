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
        choices: ["Engineer", "Intern", "No more team members"]
    }
]

const employeePrompts = [
    {
        type: "input",
        message: `Enter employee's name: `,
        name: "name"
    },

    {
        type: "input",
        message: "Enter employee's id: ",
        name: "id"
     },

     {
         type: "input",
         message: "Enter employee's email: ",
         name: "email"
     }
]

const managerPrompt = [
    {
        type: "input",
        message: `Enter manager's name: `,
        name: "name"
    },
    {
        type: "input",
        message: "Enter manager's id: ",
        name: "id"
     },
     {
         type: "input",
         message: "Enter manager's email: ",
         name: "email"
     },
    {
        type: "input",
        message: "Enter manager's office number: ",
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
        message: "Enter employee's GitHub: ",
        name: "github"
    }
]

module.exports = {newTeam, addMore, employeePrompts, managerPrompt, internPrompt, engineerPrompt}