const index = require('../index.js');

const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in

// const { default: inquirer } = require("inquirer");
const inquirer = require('inquirer');

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let lin = '';
  switch(license){
    case 'Apache License 2.0':
      lin ='[![License](https://img.shields.io/badge/License-Apache_2.0-navy.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public License v3.0':
      lin ='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MIT License':
      lin ='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'BSD 2-Clause "Simplified" License':
      lin ='[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      lin ='[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Boost Software License 1.0':
      lin ='[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      lin ='[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    case 'Eclipse Public License 2.0':
      lin ='[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
      break;
    case 'GNU Affero General Public License v3.0':
      lin ='[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case 'GNU General Public License v2.0':
      lin = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case 'GNU Lesser General Public License v2.1':
      lin = '[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)';
      break;
    case 'Mozilla Public License 2.0':
      lin = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'The Unilicense':
      lin = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      lin = '';
  }
  return lin;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <!-- Remove comments after generation as they are to be used as a guide to help get started-->
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  <!-- Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

  - What was your motivation?
  - Why did you build this project?
  - What problem did it solve?
  - What did you learn? -->

  ## Table of Contents

  <!-- Add a table of contents to make it easy for users to find what they need -->
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  ${data.install}

  <!-- What are they steps required to install your project? Provide a step-by-step description of how to get the development environment running. -->

  ## Usage
  ${data.usage}

  <!-- Provide instructions and examples for use. Include screenshots as needed.

  To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using relative filepath, add it to your README using the following syntax:

  "md
  ![alt text](assets/images/screenshot.png)
  " -->
  ## License
  ${data.license}

  <!-- The last section of a high-quality README file is the license. This lets other developer know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicence.com/). -->


  ## Contributing
  ${data.contribution}

  <!-- List your collaborators, if any, with links to their GitHub profiles.
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  If you followed tutorials, include links to those here as well. -->

  ## Tests
  ${data.test}

  <!-- Go the extra mile and write tests for your application. Then provide examples on how to run them here. -->

  ## Questions


  If you have any questions, please reach out to

`;
}

inquirer
  .prompt([
    // {
    //   type: 'input',
    //   message: index.questions[0],
    //   name: 'title',
    // },
    // {
    //   type: 'input',
    //   message: index.questions[1],
    //   name: 'description',
    // },
    // {
    //   type: 'input',
    //   message: index.questions[2],
    //   name: 'install',
    // },
    // {
    //   type: 'input',
    //   message: index.questions[3],
    //   name: 'usage',
    // },
    // {
    //   type: 'input',
    //   message: index.questions[4],
    //   name: 'contribution',
    // },
    // {
    //   type: 'input',
    //   message: index.questions[5],
    //   name: 'test',
    // },
    {
      type: 'list',
      message: index.questions[6],
      name: 'license',
      choices: ['none', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License',
    'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License',
    'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1',
    'Mozilla Public License 2.0', 'The Unilicense'],
    },
    // {
    //   type: 'input',
    //   message: index.questions[7],
    //   name: 'github',
    // },
    // {
    //   type: 'input',
    //   message: index.questions[8],
    //   name: 'email',
    // },
  ])
  .then ((data) => {
    let markdown = generateMarkdown(data);
    fs.writeFile('README.md', markdown, (err) =>
      err?
      console.error(err): console.log('File created!')
      )
  }
  )
module.exports = generateMarkdown;

// for (let i = 0; i < index.questions.length; i++){
//   console.log(index.questions[i]);

// }
// console.log(renderLicenseBadge(data.license))
