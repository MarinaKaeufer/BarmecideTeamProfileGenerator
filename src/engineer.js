const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email) {
      super(name, id, email);  
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}