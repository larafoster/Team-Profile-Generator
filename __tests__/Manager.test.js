const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

describe('Manager Class', () => {
  test("Can can assign office number to instance of Manager", () => {
    const office = 212;

    const manager = new Manager("Sam", 2, "someemail@jet.com", office);
    expect(manager.office).toBe(office);
  });
});

