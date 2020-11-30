const inquirer = require('inquirer');
// How to write a file
const fs =require ('fs');

const generateMarkdown = require('./Develop/generateMarkdown.js');

// Array of questions for the user
inquirer
.prompt ( [
  {
      type:"input",
      name:"title",
      message:"What is your project title?",
  },
  {
      type:"input",
      name:"description",
      message:"Please enter the description of your project?"
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
       type:"input ",
       name:"installation",
       message: "What type of installation you used for your project?!"
   },
   {
       type:"input",
       name:"usage",
       message:"Please provided instructions or examples!"
   },

   {
       type:"checkbox",
       name:"license",
       message:"What type of license do you used?",
       choices: [
        "MIT License",
        "Apache License",
        "GNU"
       ]
   },
   {
       type:"input",
       name:"contribution guidelines",
       message:"What does the user need to know when they are contributing to your repo?"
   },
   {
       type:"input",
       name:"test",
       message:"What type of command the user need to used to run test?",
       
   },
   {
       type:"input",
       name:"badges",
       message:"Please add your badges information here. For more information go to this Link:https://shields.io"
   },
    
])
const generateMarkdown = (answers) =>
`## Description:

The goal of this project is to create a High Quality ReadMe Generator. Using the command-line application we need to  dynamically generates a professional README.md file from a user's input using the Inquirer package.

Please read carefully the instructions on how this app functions below. I will explain in detait how we should run app, how to used it and how to install it by providing videos and screenshoots.
and   

To get started, Please do the following:

Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.
Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.
In order to run this application you will need to do the following using your command-line:
node index.js



### Installation:

The installation I used to make sure the development environment is running efficiently. I make sure to install this program below:

* Terminal (Command Line)
* Bash
* Visual Studio Code
* Git Lab
* NPM Inquirer/node_modules
* Package.JSON/package_lock.JSON
* GitIgnore



### Usage:
This page could be used as a starting place for making a ReadMe Generator.



### Contributing:
Pull requests are welcome. For major changes,<br>
please open an issue first to discuss what you would like to change.<br>
Please make sure to update tests as appropriate.


### Visuals:



### Badges:
![Installation](https://img.shields.io/badge/Installation-Terminal-blue.svg)

### License:

Copyright  © 2020 Alice Piar University of Minnesota BootCamp All rights reserved.

`


// .then((response) => {
  
//     fs.writeFile("generateMarkdown",generateMarkdown, console.log("File"))
//     // response.license=== MIT.license  
//     // ? console.log("add not text to readMe")
  
  
    
// })
 .catch (error => {
     if (error.ReadmeErr ){
         

     } else {
        console.log("try again") ;
     }
     
     
 });
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
