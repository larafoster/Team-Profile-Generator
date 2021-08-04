// create the team
const createTeam = team => {
  // create html and manager card
  const createManager = manager => {
    return `
            <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,400;1,600&display=swap"
      rel="stylesheet"
    />
    <script
      src="https://kit.fontawesome.com/cfc13c2d5f.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="./assets/css/styles.css" />
  </head>
  <body>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img
            src="./assets/img/placeholder.com-logo3.png"
            class="logo-img"
            alt="placeholder"
          />
          <h1>Team Profiles</h1>
        </div>
      </div>
    </section>
    <div class="container">
      <section>
        <div class="row row-cols-1 row-cols-md-3 g-4">
                  <div class="col">
            <div class="card h-100 mb-4">
              <div class="card-header py-3">
                <h4>${manager.getFirstName ()} </h4>
              </div> 
              <div class="card-body">
                <h5 class="card-title">${manager.getRole ()}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId ()}</li>
                <li class="list-group-item"><a href="mailto:${manager.getEmail ()}" class="btn btn-info">
                  <i class="far fa-at text-white"></i>
                  Email
                </a></li>
                <li class="list-group-item">Office Number: ${manager.getOffice ()}</li>
              </ul>
            </div>
          </div>
        `;
  };
  // create engineer card
  const createEngineer = engineer => {
    return `
        <div class="col">
            <div class="card h-100 mb-4">
              <div class="card-header py-3">
              <h4>${engineer.getFirstName ()}</h4></div>
              <div class="card-body">
                <h5 class="card-title">${engineer.getRole ()}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId ()}</li>
                <li class="list-group-item"><a href="mailto:${engineer.getEmail ()}" class="btn btn-info">
                  <i class="far fa-at text-white"></i>
                  Email
                </a></li>
                <li class="list-group-item"><a href="https://github.com/${engineer.getGithub ()}" class="btn btn-warning">
                  <i class="fab fa-github text-white"></i>
                  Github
                </a></li>
              </ul>
            </div>
          </div>
        `;
  };
  // create intern card
  const createIntern = intern => {
    return `
                 <div class="col">
            <div class="card h-100 mb-4">
              <div class="card-header py-3">
              <h4>${intern.getFirstName ()}</h4></div>
              <div class="card-body">
                <h5 class="card-title">${intern.getRole ()}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getId ()}</li>
                <li class="list-group-item"><a href="mailto:${intern.getEmail ()}" class="btn btn-info">
                  <i class="far fa-at text-white"></i>
                  Email
                </a></li>
                <li class="list-group-item">School: ${intern.getSchool ()}</li>
              </ul>
            </div>
          </div> 
        `;
  };

  const app = [];

  app.push (
    team
    //look at the employee object and filter out the getRole element if it exists for "Manager"  
      .filter (employee => employee.getRole () === 'Manager')
      .map (manager => createManager (manager)) //creates a new array populated with the results
  );
  app.push (
    team
      .filter (employee => employee.getRole () === 'Engineer')
      .map (engineer => createEngineer (engineer))
      .join ('') //joins the array with empty string (no spaces)
  );
  app.push (
    team
      .filter (employee => employee.getRole () === 'Intern')
      .map (intern => createIntern (intern))
      .join ('')
  );

  return app.join ('');
};

// export the team data above (the cards) and display them
module.exports = team => {
  return `
        ${createTeam (team)}
            </div>
        <!-- end card grid -->
      </section>
    </div>
    <footer class="footer mt-3 py-3 bg-light">
      <div class="container">
        <p class="text-muted text-center pt-2">Created by Lara Foster <i class="fab fa-github"></i> <a href="https://github.com/larafoster"> Github</a></p>
      </div>
    </footer>
  </body>
</html>
    `;
};
