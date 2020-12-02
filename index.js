const inquirer = require("inquirer");
// How to write a file
const fs = require("fs");

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
    let readMeText= `
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
 ![images](./images/gif.gif${response.usage}) 

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
    



