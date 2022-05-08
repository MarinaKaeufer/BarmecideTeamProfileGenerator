function generateWebpage(dataArr) {
    var employeeCards = "";
    for(var i = 0; i < dataArr.length; i++){
      var employee = dataArr[i];

      //employee = {name: "", id: ...}
      var extraInfo = "";
      if(employee.getRole() === "Manager"){
        extraInfo = employee.officeNumber;
      }
      if(employee.getRole() === "Intern"){
        extraInfo = employee.school;
      }
      if(employee.getRole() === "Engineer"){
        extraInfo = employee.github;
      }
      employeeCards += `
      <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style="width:100%">
          <div class="container">
            <h4><b>${employee.name}</b></h4>
            <p>${employee.getRole()}</p>
            <p>${employee.id}</p>
            <p>${employee.email}</p>
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
      <title>Employee List</title>
    </head>
    <body>
      ${employeeCards}
    </body>
    </html>
    `;
  }
  
  module.exports = generateWebpage;
  