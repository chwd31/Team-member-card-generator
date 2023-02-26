const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./classes/employee');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

const team = [];

// Questions for the team manager
const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the team manager's name?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the team manager's employee ID?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the team manager's email address?",
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "What is the team manager's office number?",
  },
];

// Questions for adding an engineer to the team
const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the engineer's name?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the engineer's employee ID?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the engineer's email address?",
  },
  {
    type: 'input',
    name: 'github',
    message: "What is the engineer's Github username?",
  },
];

// Questions for adding an intern to the team
const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the intern's name?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the intern's employee ID?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the intern's email address?",
  },
  {
    type: 'input',
    name: 'school',
    message: "What is the intern's school?",
  },
];

// Prompt the user for the team manager's information
inquirer.prompt(managerQuestions).then((managerAnswers) => {
  const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
  team.push(manager);

  // Prompt the user for the team members' information
  addTeamMember();

  function addTeamMember() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'memberType',
        message: 'What type of team member do you want to add?',
        choices: ['Engineer', 'Intern', 'Finish building my team'],
      },
    ]).then((memberAnswers) => {
      if (memberAnswers.memberType === 'Engineer') {
        inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
          const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
          team.push(engineer);
          addTeamMember();
        });
      } else if (memberAnswers.memberType === 'Intern') {
        inquirer.prompt(internQuestions).then((internAnswers) => {
          const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
          team.push(intern);
          addTeamMember();
        });
        } else {
        // Finish building team
        console.log('Team roster:', team);
        generateHTML(team);
      }
    });
  }
});