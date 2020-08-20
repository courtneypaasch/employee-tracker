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


function employeeType(addMore) {
    if (addMore.addEmployee === "Manager") {
        return UserPrompts.managerPrompt;
    } else if (addMore.addEmployee === "Engineer") {
        return UserPrompts.engineerPrompt;
    } else if (addMore.addEmployee === "Intern") {
        return UserPrompts.internPrompt;
    }
}

let firstloop = 0;
async function init() {

    if (firstloop === 0) {
        const newTeam = await inquirer.prompt(UserPrompts.newTeam);

        if (newTeam.team === "No") {
            return console.log("No new team created.")
        }
        else {

            try {

                const managerPrompt = await inquirer.prompt(UserPrompts.managerPrompt);
                const addMore = await inquirer.prompt(UserPrompts.addMore);

                employee = new Manager(managerPrompt.name, managerPrompt.id, managerPrompt.email, managerPrompt.officeNumber);
                team.push(employee);
                
                if (addMore.addEmployee === "No more team members") {
                    fs.writeFile(outputPath, render(team), function (error) {
                        if (error) {
                            return console.log(error);
                        } else {
                            console.log("Team saved in new file!");
                        }
                    });
                    return;

                } else {
                    const choice = await employeeType(addMore);
                    const employeePrompts = await inquirer.prompt(UserPrompts.employeePrompts);
                    const rolePrompt = await inquirer.prompt(choice);

                    if (addMore.addEmployee === "Engineer") {
                        employee = new Engineer(employeePrompts.name, employeePrompts.id, employeePrompts.email, rolePrompt.github);
                    } else if (addMore.addEmployee === "Intern") {
                        employee = new Manager(employeePrompts.name, employeePrompts.id, employeePrompts.email, rolePrompt.school);
                    }
                    firstloop = 1;
                    team.push(employee);
                    init()
                }

            } catch (error) {
                console.log(error);
            }
        }
    } else {
        try {
            const addMore = await inquirer.prompt(UserPrompts.addMore);

            if (addMore.addEmployee === "No more team members") {
                fs.writeFile(outputPath, render(team), function (error) {
                    if (error) {
                        return console.log(error);
                    } else {
                        console.log("Team saved in new file!");
                    }
                });
                return;

            } else {
                const choice = await employeeType(addMore);
                const employeePrompts = await inquirer.prompt(UserPrompts.employeePrompts);
                const rolePrompt = await inquirer.prompt(choice);

                if (addMore.addEmployee === "Engineer") {
                    employee = new Engineer(employeePrompts.name, employeePrompts.id, employeePrompts.email, rolePrompt.github);
                } else if (addMore.addEmployee === "Intern") {
                    employee = new Manager(employeePrompts.name, employeePrompts.id, employeePrompts.email, rolePrompt.school);
                }
                team.push(employee);
                init()
            }

        } catch (error) {
            console.log(error);
        }
    }
}

init()
