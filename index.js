const generateMarkdown = require('./utils/generateMarkdown');
const enquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// array of questions for user
const questions = [
{
    type:"input",
    name:"title",
    message:"What is the title of your application?"
},
{
    type:"input",
    name:"description",
    message:"What is the description of your application?"
},
{
    type:"input",
    name:"installation",
    message:"How do I install this project?"
},
{
    type:"input",
    name:"usage",
    message:"How do I use this project?"
}
{
    type:"input",
    name:"licence",
    message:"What licences are there for this project?"
}

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
