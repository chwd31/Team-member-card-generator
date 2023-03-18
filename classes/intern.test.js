const Intern = require('./intern');

describe('Intern', () => {
  describe('getSchool', () => {
    it('should return the intern school', () => {
      const intern = new Intern('John', 123, 'john@test.com', 'University of California');
      expect(intern.getSchool()).toEqual('University of California');
    });
  });

  describe('getRole', () => {
    it('should return "Intern"', () => {
      const intern = new Intern('John', 123, 'john@test.com', 'University of California');
      expect(intern.getRole()).toEqual('Intern');
    });
  });
});
