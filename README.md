# Team Member Card Generator

This Node.js command-line application takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. It uses Inquirer version 8.2.4 to prompt the user for input and Jest for testing.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage) 
3. [Features](#features)
4. [Contributing](#contributing)
5. [License](#license) 
6. [Credits](#credites) 
7. [Contact](#contact) 
8. [Acknowledgments](#acknowledgements)


## Installation
To use this application, you will need to have Node.js installed on your computer. You can download it from the official website: https://nodejs.org/en/.

After installing Node.js, clone the repository to your local machine and navigate to the project folder in your terminal. Run the following command to install the necessary dependencies:
npm install
This will install Inquirer version 8.2.4 and Jest.

## Usage
To start the application, run the following command in your terminal:
node index.js

Follow the prompts to enter information about your team members. You will be prompted to enter the team manager’s name, employee ID, email address, and office number. After entering this information, you will be presented with a menu with the option to add an engineer or an intern or to finish building your team.

When you select the engineer option, you will be prompted to enter the engineer’s name, ID, email, and GitHub username. When you select the intern option, you will be prompted to enter the intern’s name, ID, email, and school. After adding a team member, you will be taken back to the menu to add more team members or finish building your team.

Once you have finished building your team, an HTML file will be generated that displays a nicely formatted team roster based on the information you entered.

## Features
Inquirer is used to prompt the user for input and validate it.
Jest is used for testing, with unit tests for each part of the code.
The generated HTML file displays each team member’s name, ID, email, and role, with additional information specific to their role (GitHub username for engineers, school for interns).
Clicking on an email address in the HTML will open the user’s default email program and populate the TO field of the email with the address.
Clicking on a GitHub username in the HTML will open that GitHub profile in a new tab.
Contributing
Contributions to this project are welcome. To contribute, please fork the repository, create a new branch, and submit a pull request. Please ensure that your code follows the existing coding style and passes all tests.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

## Credits
This project was developed by [your name] as part of a coding challenge.

## Contact
If you have any questions or comments about this project, please contact [your email address].

## Acknowledgments
Inquirer: https://www.npmjs.com/package/inquirer
Jest: https://jestjs.io/





