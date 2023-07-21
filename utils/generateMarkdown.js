
// Generate a license badge. If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch(license){
    case 'Apache License 2.0':
      badge ='[![License](https://img.shields.io/badge/License-Apache_2.0-navy.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public License v3.0':
      badge ='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MIT License':
      badge ='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'BSD 2-Clause "Simplified" License':
      badge ='[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      badge ='[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Boost Software License 1.0':
      badge ='[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      badge ='[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    case 'Eclipse Public License 2.0':
      badge ='[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
      break;
    case 'GNU Affero General Public License v3.0':
      badge ='[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case 'GNU General Public License v2.0':
      badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case 'GNU Lesser General Public License v2.1':
      badge = '[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)';
      break;
    case 'Mozilla Public License 2.0':
      badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'The Unilicense':
      badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      badge = '';
  }
  return badge;
}


// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'none'){
    return '';
  } else {
  return '- [License](#license)';
}
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none') {
    return '';
  } else {
    return '## License';
  }
}

// A function that display text regarding the license if
// a license is chosen
function renderLicenseText(license) {
  if (license == 'none') {
    return '';
  } else if (license == 'The Unilicense'){
    return `Covered under ${license}`;
  } else {
    return `Covered under the ${license}`;
  }
}

// A function to generate markdown for README
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
  ${renderLicenseLink(data.license)}
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
  ${renderLicenseSection(data.license)}
  ${renderLicenseText(data.license)}


  <!-- The next section of a high-quality README file is the license. This lets other developer know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicence.com/). -->


  ## Contributing
  ${data.contribution}

  <!-- If you would like other developers to contribute to your project, you can include guidelines
  for how they can do so. The Contributor Covenant(https://www.contributor-covenant.org/) is an
  industry standard, but you can always write your own.-->

  ## Tests
  ${data.test}

  <!-- Go the extra mile and write tests for your application. Then provide examples on how to run them here. -->

  ## Questions
  A link to my [GitHub Profile](https://www.github.com/${data.github})

  If you have any questions, please reach out to me via email: ${data.email}.

`;
}


module.exports = generateMarkdown;
