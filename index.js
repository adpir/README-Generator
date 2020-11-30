const inquirer = require("inquirer");
// How to write a file
const fs = require("fs");

// const generateMarkdown = require('./Develop/generateMarkdown.js');

// Array of questions for the user
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter the description of your project?",
    },
    //   {
    //       type:"list",
    //       name:"table of contents",
    //       message:"",
    //       choices:[
    //          "Installation",
    //          "Usage",
    //          "Badges",
    //          "Contributing",
    //          "Test",license"

    //       ]
    //   },
    {
      type: "input ",
      name: "installation",
      message: "What type of installation you used for your project?!",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage term?!",
    },

    {
      type: "list",
      name: "license",
      message: "What type of license do you used?",
      choices: ["MIT", "Apache 2.0", "GNU","ISC","Unlicense"],
    },
    {
      type: "input",
      name: "contribution",
      message:
        "Please provided the user contribution repo?",
    },
    {
      type: "input",
      name: "test",
      message: "What type of command the user need to used to run test?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub Username?",
    },
  ])
  .then((response) => {
    console.log(response);
    var readMeText= `
# Project Title : ${response.title}

## Description : ${response.description}


## Author : ${response.contribution}

## License : 
![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)


## Table of Contents 

* [Usage](#Usage)

* [Installation](#Installation)

* [Test](#Test)

* [Contact](#Contact)

* [Profile](#Profile)

 ## Usage
${response.usage}

## Installation
${response.installation}

## Test
${response.test}

## Contact 
If you have any questions please send me an email ${response.email}

## Profile

[GitHub](https://github.com/adpir?tab=repositories)
    
    `
    console.log(readMeText);
    fs.writeFileSync("README.md",readMeText, (error) => {
        if(error)throw error;
        console.log("fileGernerator")
    })   
  }) 
  .catch(error => {
      console.log(error);
  })
    


//     fs.writeFile("generateMarkdown",generateMarkdown, console.log("File"))
//     // response.license=== MIT.license
//     // ? console.log("add not text to readMe")

// })

// array of questions for user
// const questions = [

// ];

// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(

//     // console.log(generateMarkdown ());
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
