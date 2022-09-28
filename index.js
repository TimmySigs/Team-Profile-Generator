const inquirer = require("inquirer");
const emailValidator = require("email-validator");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const fs = require("fs");

let employees = [];

const Employee = {
    Intern: "Intern",
    Engineer: "Engineer",
    Manager: "Manager",
};