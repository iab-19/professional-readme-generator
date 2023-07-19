// TODO: Include packages needed for this application
const fs = require('fs');
// Extend functionality of node.js
// to allow use of file system (writeFile, readFile, )
const inquirer = require('inquirer');
// Allow use of inquirer to ask user for inputs
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['1. Enter the title of your project: ',
'2. Enter a short description about your project: ',
'3. Enter installation instructions for your project: ',
'4. Enter usage information for your project: ',
'5. Enter contribution guidelines for your project: ',
'6. Enter test instructions for your project:',
'7. Choose your preferred license from the drop down list:',
'8. Enter your GitHub username:',
'9. Enter your email address: '
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// Export questions to generateMarkdown file
module.exports = {
    questions,
};
