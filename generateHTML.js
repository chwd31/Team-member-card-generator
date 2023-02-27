// //generateHTML.js

// const fs = require('fs');
// const Handlebars = require('handlebars');
// const team = require('./classes/team').team;

// // Load the HTML template
// const template = fs.readFileSync('template.html', 'utf8');

// // Compile the template
// const render = Handlebars.compile(template);

// // Generate the HTML file with the team data
// function generateHTML(team) {
//   const html = render({ team });
//   fs.writeFileSync('team.html', html);
// }

// module.exports = generateHTML;

const fs = require('fs');
const path = require('path');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');
const Employee = require('./classes/Employee');
const team = require('./classes/team');


function generateHTML(team) {
  const cards = team.map((member) => {
    let memberType = '';
    let memberField = '';
    if (member instanceof Manager) {
      memberType = 'Manager';
      memberField = `Office Number: ${member.getOfficeNumber()}`;
    } else if (member instanceof Engineer) {
      memberType = 'Engineer';
      memberField = `GitHub Username: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a>`;
    } else if (member instanceof Intern) {
      memberType = 'Intern';
      memberField = `School: ${member.getSchool()}`;
    }
    return `
      <div class="card">
        <div class="card-header">
          <h2>${member.getName()}</h2>
          <h4>${memberType}</h4>
        </div>
        <div class="card-body">
          <p>ID: ${member.getId()}</p>
          <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
          <p>${memberField}</p>
        </div>
      </div>
    `;
  });
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Roster</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background-color: #f4f4f4;
        }
        header {
          background-color: #333;
          color: #fff;
          padding: 20px;
        }
        header h1 {
          font-size: 36px;
        }
        .container {
          max-width: 960px;
          margin: 50px auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .card {
          width: 300px;
          background-color: #fff;
          margin: 20px;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 5px 5px 10px rgba(0,0,0,0.1);
        }
        .card-header {
          background-color: #0077c2;
          color: #fff;
          padding: 10px;
          text-align: center;
        }
        .card-header h2 {
          font-size: 24px;
        }
        .card-header h4 {
          font-size: 18px;
        }
        .card-body {
          padding: 10px 20px;
        }
        .card-body p {
          font-size: 16px;
          margin-bottom: 5px;
        }
        a {
          color: #0077c2;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <div class="container">
        ${cards.join('')}
      </div>
    </body>
    </html>
  `;

  const distDir = './dist';
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  const filePath = path.join(distDir, 'index.html');
  fs.writeFile(filePath, html, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Successfully generated team profile page!');
  });
}

module.exports = generateHTML;
