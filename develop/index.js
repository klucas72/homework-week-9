//constants for script
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

//README.md questions
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your username?',
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a username.")
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter an email.")
            }
        }
    },
    {
        type: 'input',
        message: 'What is the Projet Title?',
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter the Project Title of your README");
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter a Description.',
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a description")
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please explain how the user would install program (if necessary)',
        //validation not required if no installation instructions are needed
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on the use of the program and examples in this section'
        //validation not required if no usage instructions are needed
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any credits or contributors to your program or project.',
        //validation not required if no credits or contributors were used
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose the license used for your program or project.',
        choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
    }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
