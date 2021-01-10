// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## description
  
  ${data.description}

  ## Installation Instructions

  ${data.installation}

  ## Usage Instructions

  ${data.usage}

  ## Licence

  ${data.licence}

  ## Contributing

  ${data.contributing}
`;
}

module.exports = generateMarkdown;
