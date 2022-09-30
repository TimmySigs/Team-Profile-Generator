const Employee = require("../lib/employee.js");

describe("Getters", () => {
    const name = "George Harrison";
    const id = 22;
    const email = "HarryBeatle@abbeyroad.com";
    const role = "Employee";

    const testEmployee = new Employee(name, id, email);

    it("Should return the Employee name when requested", () => {
        expect(testEmployee.getName()).toBe(name);
    });

    it("Should return the Employee id when requested", () => {
        expect(testEmployee.getId()).toBe(id);
    });

    it("Should return the Employee email when requested", () => {
        expect(testEmployee.getEmail()).toBe(email);
    });

    it("Should return the Employee role when requested", () => {
        expect(testEmployee.getRole()).toBe(role);
    });
});