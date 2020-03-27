const fs = require("fs");
const inquirer = require("inquirer");
const api = require("./utils/api");
const path = require("path");
   

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),`!(${data.avatar_url})`);
}

function init() {
    inquirer
    .prompt([
      /* Pass your questions in here */
          {
              message:"What is your GitHub username?",
              name:"Username"
          },
      {
          message:"What license are you using?",
          name:"License"
      },
      {
          message:"What is the project title?",
          name:"Title"
      },
      {
          message:"Please provide a description of your project",
          name:"Description"
      },
      {
          message:"What are the installation instructions?",
          name:"installation"
      },
      {
          message:"Provide the usage",
          name:"Usage"
      },
      {
          message:"Please list any contributors.",
          name:"Contributers"
      },
      {
          message:"Please provide information about the tests.",
          name:"Tests"
      },
      {
          message:"Would you like to add any questions?",
          name:"questions"
      },
    
]).then((responses)=>{
    
    api.getUser(responses.Username)
    .then(({data})=>{
        console.log(data);
        writeToFile("readme.md", data)
    })
})
}

init();
