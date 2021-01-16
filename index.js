// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Project Title',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a project title.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a project description");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter contributions'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have? (Choose one)',
        choices: ['MIT', 'Apache', 'GPL']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter your username");
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
        writeToFile('README.md', generateMarkdown({...responses}));
        })
}

// Function call to initialize app
init();
