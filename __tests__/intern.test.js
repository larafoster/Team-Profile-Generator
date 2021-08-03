const Employee = require("../lib/employee");
const Intern = require("../lib/intern");


describe('Intern Class', () => {
  test("Can can assign school to instance of Intern", () => {
    const school = "OSU";

    const intern = new Intern("Ryan", 3, "email@jet.com", school);
    expect(intern.school).toBe(school);
  });
});

