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

    {
      type: 'input',
      name: 'office',
      message: 'what is the managers office number',
      when: (input) => input.role === "Manager",
      validate: nameInput => {
          if (nameInput) {
            return true;
          }
          else {
            console.log ("Please enter the manager's office");
          }
        }
      },
        
      {
        type: 'input',
        name: 'github',
        message: 'what is the engineers github username',
        when: (input) => input.role === "Engineer",
          validate: nameInput => {
            if (nameInput) {
              return true;
            }
            else {
              console.log ("Please enter engineers github name");
            }
            }
        },

        {
            type: 'input',
            name: 'school',
            message: 'what is the interns school',
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log ("Please enter the interns school");
                }
            }
        },

        {
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: 'Would you like to add more employees?',
            default: false
        },
  ]);

  .then(employeeData => {
    var {name, id, email, role, office, github, addAnotherEmployee} = employeeData;
    var employee;

    if (role === "Manager") {
      employee = new Manager (name, id, email, role, office);

    }

    else if (role === "Engineer"){
      employee = new Engineer (name, id, email, role, github);
    }

    else if (role === "Intern"){
      employee = new Intern (name, id, email, role, school);
    }

    console.log(employee);
    team.push(employee);

    if (addAnotherEmployee){
      return addEmployee(team);
    }

    else {
      return team;
    }
  })
};

addEmployee()
  .then(team => {
    return generateHTML(team);
  })
  .then(page => {
    return writeFile(page);
  })
