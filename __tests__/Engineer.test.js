const Engineer = require('../lib/engineer');

describe('Engineer test', () => {
    it('Constructor', () => {
      var engineer = new Engineer("Matt", 23443, "matt@yahoo.com");   
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });