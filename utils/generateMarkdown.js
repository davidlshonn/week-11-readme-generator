// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
  
  ${data.description}

  ### Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Report](#report)
* [Contributions](#Contribution)
* [Tests](#Test)
* [Questions](#questions)

  
## Installation Instructions

  ${data.installation}

## Usage Instructions

  ${data.usage}

## License

  ${data.license}

## Contributing

  ${data.contributing}

## Tests

  ${data.tests}

## Questions

  ${data.questions}

### GitHub

  ${data.github}

### Email

  ${data.email}
`;
}

module.exports = generateMarkdown;
