const Employee = require("../lib/employee");
//confirm that employee is an object
describe('Employee Class', () => {
  test("Can create an instance of Employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });
});
//toBe -  compares for strict equality (e.g. ===)
//https://stackoverflow.com/questions/57723035/how-to-add-types-checker-for-the-jest-in-the-typescript-app
