// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![GitHub License](https://img.shields.io/badge/License-${license}-yellow.svg)`

  } 

  return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return (
      `*[license](#license)`
    );
  } 

  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license)  {
if (license !== 'none') {
  return (
    `## license
    
    This project is licensed under ${license} license.`
  )
} 

return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## description

  ${data.description}

  ## Table of Contents

  *[Installation](#installation)

  *[Usage](#usage)

  ${renderLicenseLink(data.license)}

  *[Contributing](#contributing)

  *[Tests](#tests) 

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have questions, you can reach me at ${data.email} or visit [${data.username}](https://github.com/${data.username}/)

`;
}

module.exports = generateMarkdown;
