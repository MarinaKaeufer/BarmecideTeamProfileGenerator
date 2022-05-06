// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');

// Import helper method
var generateWebpage = require('./utils/generateWebpage.js');
    
// TODO: Create an array of questions (objects) for user input
const manager_questions = [
    {
        type: "input", 
        name: "manager-name",
        message: "What is the name of the manager?"
    },
    { 
        type: "input",
        name: "manager-id",
        message: "What is the manager's id?"
    },
    { 
        type: "input",
        name: "manager-email",
        message: "What is the manager's email?"
    },
    { 
        type: "input",
        name: "manager-officeNumber",
        message: "What is the manager's office number?"
    }
];

const add_employee = [
    { 
        type: "list",
        name: "addEmployee",
        message: "Would you like to add an Engineer or Intern?",
        choices: ["Add Engineer", "Add Intern", "No, I'm done"]
    }
]

const engineer_questions = [
    {
        type: "input", 
        name: "engineer-name",
        message: "What is the name of the engineer?"
    },
    {
        type: "input", 
        name: "engineer-id",
        message: "What is engineer's id?"
    },
    {
        type: "input", 
        name: "engineer-email",
        message: "What is engineer's email?"
    },
    {
        type: "input", 
        name: "engineer-github",
        message: "What is engineer's github username?"
    }
]

const intern_questions = [
    {
        type: "input", 
        name: "intern-name",
        message: "What is the name of the intern?"
    },
    {
        type: "input", 
        name: "intern-id",
        message: "What is intern's id?"
    },
    {
        type: "input", 
        name: "intern-email",
        message: "What is intern's email?"
    },
    {
        type: "input", 
        name: "intern-school",
        message: "What is intern's school?"
    }
]
// TODO: Create a function to write the html file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err);
        }
      });
}

// TODO: Create a function to initialize app
function init() {
    console.log(` `);
    console.log(` `);
    console.log(`Hi and welcome to employee page generator.`);
    console.log(` `);
    console.log(` `);

    // Display question
    inquirer
        .prompt(manager_questions)
        .then((manager_responses) => {
            inquirer
                .prompt(add_employee)
                .then((add_responses) => {
                    console.log(`manager responses ${manager_responses}`);
                    console.log(`add employee responses ${add_responses}`);
                })
            // const html = generateWebpage(responses);
            // writeToFile("index.html",html);
        })
        .catch((error) => {
            console.log("Something went wrong " + error);
        });
    }

// Function call to initialize app
init();
