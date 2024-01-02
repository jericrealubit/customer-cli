#!/usr/bin/env node
import { program } from "commander";
import { addCustomer, findCustomer } from "./index.js";

program.version("1.0.0").description("Client Management System");

program
  .command("add add <firstname> <lastname> <phone> <email>")
  .alias("a")
  .description("Add a customer")
  .action((fistname, lastname, phone, email) => {
    addCustomer({ fistname, lastname, phone, email });
  });

program
  .command("find <name>")
  .alias("f")
  .description("Find a customer")
  .action((name) => findCustomer(name));

program.parse(process.argv);
