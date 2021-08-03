const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

describe('Engineer Class', () => {
  test("Can can assign Github username to instance of Engineer", () => {
    const github = "someuser";

    const engineer = new Engineer("Nicole", 4, "email@jet.com", github);
    expect(engineer.github).toBe(github);
  });
});