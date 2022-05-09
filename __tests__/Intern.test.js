const Intern = require('../lib/intern');

describe('Intern test', () => {
    it('Constructor', () => {
      var intern = new Intern ("Masha", 89883, "masha@yahoo.com");   
      expect(intern.getRole()).toEqual("Intern");
    });
  });