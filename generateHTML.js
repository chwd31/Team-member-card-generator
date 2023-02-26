const fs = require('fs');
const Handlebars = require('handlebars');
const team = require('./server').team;

// Load the HTML template
const template = fs.readFileSync('template.html', 'utf8');

// Compile the template
const render = Handlebars.compile(template);

// Generate the HTML file with the team data
function generateHTML(team) {
  const html = render({ team });
  fs.writeFileSync('team.html', html);
}

module.exports = generateHTML;
