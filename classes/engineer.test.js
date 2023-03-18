const Engineer = require('./engineer');

describe('Engineer', () => {
  describe('getGithub', () => {
    it('should return the engineer GitHub username', () => {
      const engineer = new Engineer('John', 123, 'john@test.com', 'johndoe');
      expect(engineer.getGithub()).toEqual('johndoe');
    });
  });

  describe('getRole', () => {
    it('should return "Engineer"', () => {
      const engineer = new Engineer('John', 123, 'john@test.com', 'johndoe');
      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});
