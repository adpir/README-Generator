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
      choices: ["MIT", "Apache 2.0", "GNU", "ISC", "Unlicense"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Do you allow another user to contribute to your repo?",
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
    {
      type: "input",
      name: "author",
      message: "What is the author of this repo?",
    },
  ])
  .then((response) => {
    console.log(response);
    let readMeText = `

# Title : ![GitHub license](https://img.shields.io/badge/license-${response.title}-blue.svg)


## Description : 
${response.description}


# Author : ${response.author}


## Table of Contents 

* [Usage](#Usage)

* [Installation](#Installation)

* [Test](#Test)

* [Contact](#Contact)

* [Profile](#Profile)

 ## Usage:
 ${response.usage}


 ## :camera: Visuals:

 ![Giphy](images/gif.gif)<br>
 ![Giphy](images/jso.gif)<br>
 ![images](images/Package.png)
 


## Installation:

${response.installation}


## Contributing:

${response.contributing}


## Test:

${response.test}


## License :copyright:
[License] (ReadMe/LICENSE ${response.license})
 


## Contact:

If you have any questions please send me an email ${response.email}


## Profile:

[GitHub](https://github.com/adpir?tab=repositories)
    
    `;
    console.log(readMeText);
    fs.writeFileSync("README.md", readMeText, (error) => {
      if (error) throw error;
      console.log("fileGernerator");
    });
  })
  .catch((error) => {
    console.log(error);
  });
