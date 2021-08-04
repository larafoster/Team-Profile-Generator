//modules 
const Employee = require ('./lib/employee');
const Intern = require ('./lib/intern');
const Engineer = require ('./lib/engineer');
const Manager = require ('./lib/manager');
const inquirer = require ('inquirer');
const path = require ('path');
const fs = require ('fs');
//array to hold team data
const myTeam = [];

//main function collect data for team
 const buildTeam = () => {
   //function to collect data for each type of team member
  const createManager = () => {
    inquirer
      .prompt ([
        {
          //I added instructions to let the user know what to expect.
          type: 'confirm',
          message: 'This app will build your team. Simply answer the prompts. Are you ready? ',
          name: 'instructions',
        },

        {
          type: 'input',
          name: 'managerName',
          message: "What is the team manager's first name?",
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What is the team manager's id?",
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the team manager's email?",
        },
        {
          type: 'input',
          name: 'office',
          message: "What is the team manager's office number?",
        },
      ])
      .then (response => {
        //create new manager object and push the user responses of manager to the myTeam array. 
        const manager = new Manager (
          response.managerName,
          response.managerId,
          response.managerEmail,
          response.office
        );
        myTeam.push (manager);
        createTeam (); //then run the createTeam function - that asks to add another type of team member 
      });
  }
  createManager ();
//createTeam uses switch case function to allow user to add more team members. if no more team members are entered, then it generates the html 
  const createTeam = () => {
    inquirer
      .prompt ([
        {
          type: 'list',
          name: 'addTeamMember',
          message: 'Select another member of your team.',
          choices: ['Engineer', 'Intern', 'My team is complete'],
        },
      ])
      .then (selection => {
        switch (selection.addTeamMember) {
          case 'Engineer':
            addEngineer ();
            break;
          case 'Intern':
            addIntern ();
            break;
          default:
            generateFile ();
        }
      });
  }

  const addEngineer = () => {
    inquirer
      .prompt ([
        {
          type: 'input',
          name: 'engineerName',
          message: "What is the engineer's first name?",
        },
        {
          type: 'input',
          name: 'engineerId',
          message: "What is the engineer's id?",
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "What is the engineer's email?",
        },
        {
          type: 'input',
          name: 'github',
          message: "What is the engineer's GitHub username?",
        },
      ])
      .then (response => {
        const engineer = new Engineer (
          response.engineerName,
          response.engineerId,
          response.engineerEmail,
          response.github
        );
        myTeam.push (engineer);
        createTeam (); 
      });
  }

  const addIntern = () => {
    inquirer
      .prompt ([
        {
          type: 'input',
          name: 'internName',
          message: "What is the intern's first name?",
        },
        {
          type: 'input',
          name: 'internId',
          message: "What is the intern's id?",
        },
        {
          type: 'input',
          name: 'internEmail',
          message: "What is the intern's email?",
        },
        {
          type: 'input',
          name: 'school',
          message: "What is the intern's school?",
        },
      ])
      .then (response => {
        const intern = new Intern (
          response.internName,
          response.internId,
          response.internEmail,
          response.school
        );
        myTeam.push (intern);
        createTeam ();
      });
  }
  //the results will be in a directory called 'results'
  const resultsDir = path.resolve (__dirname, 'results');
  //the html file that is generated will reside inside the folder 'results'
  const resultsPath = path.join (resultsDir, 'team.html');

//this function uses the stored info in myTeam and uses the template to display the generated html page 
  const generateFile = () => {
    fs.writeFileSync (resultsPath, require ('./src/htmlTemplate.js') (myTeam));
  }

}

buildTeam ();
