const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const UserPrompts = require("./lib/UserPrompts");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = [];
let employee;

function employeeType(addMore){
    if(addMore.addEmployee === "Manager"){
        return UserPrompts.managerPrompt;
    } else if(addMore.addEmployee === "Engineer") {
        return UserPrompts.engineerPrompt;
    } else if(addMore.addEmployee === "Intern"){
        return UserPrompts.internPrompt;
    }
}


async function init() {
    try{
        const addMore = await inquirer.prompt(UserPrompts.addMore);

        if(addMore.addEmployee === "No more team members"){
           fs.writeFile(outputPath, render(team), function(error){
               if(error){
                   return console.log(error);
               }else {
                   console.log("Team saved in new file!");
               }
           });
           return;
            
        }else{
            const choice = await employeeType(addMore);
            const employeePrompts = await inquirer.prompt(UserPrompts.employeePrompts);
            const rolePrompt = await inquirer.prompt(choice);
            
            if(addMore.addEmployee === "Manager"){
                employee = new Manager(employeePrompts.name, employeePrompts.id, employeePrompts.email, rolePrompt.officeNumber)
            }  else if(addMore.addEmployee === "Engineer"){
                employee = new Engineer(employeePrompts.name, employeePrompts.id, employeePrompts.email, rolePrompt.github)
            } else if(addMore.addEmployee === "Intern"){
                employee = new Manager(employeePrompts.name, employeePrompts.id, employeePrompts.email, rolePrompt.school)
            }
            
            team.push(employee);
            init()
        
        }
    }catch (error) {
        console.log(error);
    }
}

init()

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
