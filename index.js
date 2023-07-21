// Extend functionality of node.js
// to allow use of file system (writeFile, readFile, appendFile)
const fs = require('fs');

// Allow use of inquirer to ask user for inputs
const inquirer = require('inquirer');


const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
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


inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'install',
    },
    {
      type: 'input',
      message: questions[3],
      name: 'usage',
    },
    {
      type: 'input',
      message: questions[4],
      name: 'contribution',
    },
    {
      type: 'input',
      message: questions[5],
      name: 'test',
    },
    {
      type: 'list',
      message: questions[6],
      name: 'license',
      choices: ['none', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License',
    'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License',
    'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1',
    'Mozilla Public License 2.0', 'The Unilicense'],
    },
    {
      type: 'input',
      message: questions[7],
      name: 'github',
    },
    {
      type: 'input',
      message: questions[8],
      name: 'email',
    },
  ])
  .then ((data) => {
    let markdown = generateMarkdown(data);
    fs.writeFile('./utils/README.md', markdown, (err) =>
      err?
      console.error(err): console.log('File created!')
      )
  }
  )
