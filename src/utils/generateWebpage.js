function generateWebpage(dataArr) {
    var employeeCards = "";
    for(var i = 0; i < dataArr.length; i++){
      var employee = dataArr[i];

      //employee = {name: "", id: ...}
      var extraInfo = "";
      console.log(`employee in generate ${JSON.stringify(employee)}`);
      if(employee.getRole() === "Manager"){
        console.log(`Manager info`);
        extraInfo = employee.getOfficeNumber();
      }
      if(employee.getRole() === "Intern"){
        console.log(`Intern info`);
        extraInfo = employee.getSchool();
      }
      if(employee.getRole() === "Engineer"){
        console.log(`Engineer info`);
        extraInfo = employee.getGithub();
      }
      employeeCards += `
      <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style="width:100%">
          <div class="container">
            <h4><b>${employee.getName()}</b></h4>
            <p>${employee.getRole()}</p>
            <p>${employee.getId()}</p>
            <p>${employee.getEmail()}</p>
            <p>${extraInfo}</p>
          </div>
      </div>`
    }
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="dist/styles.css">
      <title>Employee List</title>
    </head>
    <body>
      ${employeeCards}
    </body>
    </html>
    `;
  }
  
  module.exports = generateWebpage;
  