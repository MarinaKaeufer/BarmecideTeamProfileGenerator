const Manager = require('../lib/manager');

describe('Manager test', () => {
    it('Constructor', () => {
      var manager = new Manager ("John", 39383, "john@yahoo.com");   
      expect(manager.getRole()).toEqual("Manager");
    });
  });