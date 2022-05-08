// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');

// Import classes
const Manager = require('./src/manager');
const Engineer = require('./src/engineer');
const Intern = require('./src/intern');

// Import helper method
var generateWebpage = require('./src/utils/generateWebpage.js');
    
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

const new_employee = [
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

var newEmployees = [];

// TODO: Create a function to write the html file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err);
        }
      });
}

// TODO: Create a function to initialize app
async function init() {
    console.log(` `);
    console.log(` `);
    console.log(`Hi and welcome to employee page generator.`);
    console.log(` `);
    console.log(` `);

    // Display question
    var manager_responses = await inquirer.prompt(manager_questions);
    const name = manager_responses.name;
    const id = manager_responses.id;
    const email = manager_responses.email;
    const officeNumber = manager_responses.officeNumber;
    const manager = new Manager(name, id, email, officeNumber);
    newEmployees.push(manager);
    
    var new_employee_responses = await inquirer.prompt(new_employee);
    if(new_employee_responses.addEmployee === "Add Engineer"){
        var new_employee_responses = await inquirer.prompt(engineer_questions);
        // Create engineer object'
        const name = new_employee_responses.name;
        const id = new_employee_responses.id;
        const email = new_employee_responses.email;
        const github = new_employee_responses.github;
        const engineer = new Engineer(name, id, email, github);
        newEmployees.push(engineer);
    } else if(new_employee_responses.addEmployee === "Add Intern"){ 
        var new_employee_responses = await inquirer.prompt(intern_questions);
        // Create intern object
        const name = new_employee_responses.name;
        const id = new_employee_responses.id;
        const email = new_employee_responses.email;
        const school = new_employee_responses.school;
        const intern = new Intern(name, id, email, school);
        newEmployees.push(intern);
    }
    
    console.log("We are generating the html file...");  
    const html = generateWebpage(newEmployees);
    writeToFile("index.html",html);
}

// Function call to initialize app
init();
