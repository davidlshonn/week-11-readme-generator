const generateMarkdown = require('./utils/generateMarkdown');
const enquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// array of questions for user
const questions = [
{
    type:"input",
    name:"title",
    default:"Project Title",
    message:"What is the title of your project?"
},
{
    type:"input",
    name:"description",
    default:"Project Description",
    message:"Write a description of your project."
},
{
    type:"input",
    name:"installation",
    message:"If applicable, describe the steps required to install your project."
},
{
    type:"input",
    name:"usage",
    message:"Provide instructions and examples of your project in use."
},
{
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: 'license'
},
{
    type:"input",
    name:"contribting",
    message:"If applicable, provide guidelines on how other developers can contribute to your project."
},
{
    type:"input",
    name:"tests",
    message:"If applicable, provide any tests written for your application and provide examples on how to run them."
},
{
    type:"input",
    name:"questions",
    message:"What questions are there relating to this project?"
},
{
    type:"input",
    name:"github",
    message:"Please state your github username."
},
{
    type:"input",
    name:"email",
    message:"Please state your email address."
},
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
    enquirer.prompt(questions).then((answers) =>{
        console.log (answers);
        console.log (process.cwd());
        var newFileLocation = path.join(process.cwd(), "newReadMe.md");
        var newReadmeInfo = generateMarkdown(answers);
        writeToFile(newFileLocation, newReadmeInfo);
    })
}

// function call to initialize program
init();
