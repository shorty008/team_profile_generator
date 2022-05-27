const fs = require("fs");
const inquirer = require("inquirer");

//generate HTML page template
const generateHTML = require("./src/generateHTML");

const addEmployee = () => {
  console.log(`
    -------------------------------------
    Please enter this employee information
    -------------------------------------
    `);

  return inquirer.prompt([
    {
      type: "list",
      name: "name",
      message: "Please enter in the employee name:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter in the employee name:");
          return false;
        }
      },
    },

    {
      type: "list",
      name: "email",
      message: "Please enter in the employee email:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter in the employee email:");
          return false;
        }
      },
    },

    {
      type: "list",
      name: "id",
      message: "Please enter in the employee ID Number:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter in the employee ID Number:");
          return false;
        }
      },
    },

    {
      type: "list",
      name: "role",
      message: "What role does this employee have:",
      choices: ["Manager", "Employee", "Intern"],
    },
  ]);
};
