const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

     inquirer
    .prompt([
      /* Pass your questions in here */
          {
              message:"What is your GitHub username?",
              name:"Username"
          },
      {
          message:"What license are you using?",
          license:"License"
      },
      {
          message:"What is the project title?",
          title:"Title"
      },
      {
          message:"Please provide a description of your project",
          description:"Description"
      },
      {
          message:"Please provide a table of contents",
          contents:"Table of contents"
      },
      {
          message:"What are the installation instructions?",
          installation:"installation"
      },
      {
          message:"Provide the usage",
          usage:"Usage"
      },
      {
          message:"Please list any contributors.",
          contributors:"Contributers"
      },
      {
          message:"Please provide information about the tests.",
          tests:"Tests"
      },
      {
          message:"Would you like to add any questions?",
          questions:"questions"
      },
    
]);

function writeToFile(fileName, data) {
}

function init() {

}

init();
