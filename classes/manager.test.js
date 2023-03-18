const Manager = require('./manager');

describe('Manager', () => {
  describe('getOfficeNumber', () => {
    it('should return the manager office number', () => {
      const manager = new Manager('John', 123, 'john@test.com', '1234');
      expect(manager.getOfficeNumber()).toEqual('1234');
    });
  });

  describe('getRole', () => {
    it('should return "Manager"', () => {
      const manager = new Manager('John', 123, 'john@test.com', '1234');
      expect(manager.getRole()).toEqual('Manager');
    });
  });
});
