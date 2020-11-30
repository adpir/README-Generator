const inquirer= require('inquirer');

inquirer
.prompt ([
 {
     type:"input",
     name:"Application",
     message:"What application you are using?"
 }
 



])
.then(response => {
 console.log('Good Answers', response);



})
.catch(error => {
    console.log('Try again',error);




})
