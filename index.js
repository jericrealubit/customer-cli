import mongoose from "mongoose";
import Customer from "./models/customer.js";

// Map global promise - get rid of warnings
mongoose.Promise = global.Promise;

// connect to db
mongoose.connect("mongodb://localhost:27017/customercli");

// Add customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New Customer added successfully");
    mongoose.connection.close();
  });
};

// Find Customer
const findCustomer = (name) => {
  // Make case insensitive
  const search = new RegExp(name, "i");
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      mongoose.connection.close();
    }
  );
};

export { addCustomer, findCustomer };
