const Employee = require('./employee');

describe('Employee', () => {
  describe('getName', () => {
    it('should return the employee name', () => {
      const employee = new Employee('John', 123, 'john@test.com');
      expect(employee.getName()).toEqual('John');
    });
  });

  describe('getId', () => {
    it('should return the employee ID', () => {
      const employee = new Employee('John', 123, 'john@test.com');
      expect(employee.getId()).toEqual(123);
    });
  });

  describe('getEmail', () => {
    it('should return the employee email', () => {
      const employee = new Employee('John', 123, 'john@test.com');
      expect(employee.getEmail()).toEqual('john@test.com');
    });
  });

  describe('getRole', () => {
    it('should return "Employee"', () => {
      const employee = new Employee('John', 123, 'john@test.com');
      expect(employee.getRole()).toEqual('Employee');
    });
  });
});
