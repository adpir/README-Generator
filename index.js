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
      type: "input",
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

 ${response.title}
 

![license](https://img.shields.io/badge/license-${response.license}-blue.svg)
![Language](https://img.shields.io/badge/Languages-HTML,CSS,Jquery,Nodes-violet.svg)
![Command-line](https://img.shields.io/badge/Command-line-blueviolet.svg)
![npm](https://img.shields.io/badge/npm-red.svg)

## Description : 
${response.description}


### Author : ${response.author}


### Table of Contents 

* [Usage](#Usage)

* [Visuals](#Visuals)

* [Installation](#Installation)

* [Test](#Test)

* [Contact](#Contact)


 ### Usage:

 ${response.usage}


### Visuals:
 
![Giphy](images/gif.gif)<br>
![Giphy](images/jso.gif)<br>
![image](images/readme.png)<br>
![Video](images/Readme_Generator.mp4)

 
### Installation:

${response.installation}


### Contributing:

${response.contributing}


### Test:

${response.test}


### :copyright: License


[MIT](https://github.com/adpir/README-Generator/blob/main/LICENSE)


### Contact:

If you have any questions please contact me at ${response.email}


### :octocat: Profile:

[GitHub](https://github.com/adpir?tab=repositories)
    
    `;
    console.log(readMeText);
    fs.writeFileSync("README.md", readMeText, (error) => {
      if (error) throw error;
      console.log("fileGenerator");
    });
  })
  .catch((error) => {
    console.log(error);
  });
