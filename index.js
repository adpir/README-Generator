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
//          "license",
//          "Badges",
//          "Contributing",
//          "Test"
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
.then(response => {
    console.log("Great, job",response);
    fs.writeFile("generateMarkdown",generateMarkdown, console.log("File"))
    
//     // response.license=== mit license  { add not text to readme }
    
})
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
