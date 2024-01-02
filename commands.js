#!/usr/bin/env node
import { program } from "commander";
import {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomer,
} from "./index.js";
import inquirer from "inquirer";

// Customer Questions
const questions = [
  { type: "input", name: "firstname", message: "Customer First Name" },
  { type: "input", name: "lastname", message: "Customer Last Name" },
  { type: "input", name: "phone", message: "Customer phone Number" },
  { type: "input", name: "email", message: "Customer Email Address" },
];

program.version("1.0.0").description("Client Management System");

// Add Command
program
  .command("add")
  .alias("a")
  .description("Add a customer")
  .action(() => {
    inquirer.prompt(questions).then((answers) => addCustomer(answers));
  });

// Find Command
program
  .command("find <name>")
  .alias("f")
  .description("Find a customer")
  .action((name) => findCustomer(name));

// Update Command
program
  .command("update <_id>")
  .alias("u")
  .description("Update a customer")
  .action((_id) => {
    inquirer.prompt(questions).then((answers) => updateCustomer(_id, answers));
  });

// Remove Command
program
  .command("remove <_id>")
  .alias("r")
  .description("Remove a customer")
  .action((_id) => removeCustomer(_id));

// List Command
program
  .command("list")
  .alias("l")
  .description("List all customers")
  .action(() => listCustomer());

program.parse(process.argv);
