const Employee = require('../lib/employee');

describe('Employee test', () => {
    it('Constructor', () => {
      var employee = new Employee("Jackie", 435454, "jackie@yahoo.com");   
      expect(employee.getRole()).toEqual("Employee");
    });
  });