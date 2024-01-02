import mongoose from "mongoose";
import Customer from "./models/customer.js";

// Map global promise - get rid of warnings
mongoose.Promise = global.Promise;

// connect to db
const db = mongoose.connect("mongodb://localhost:27017/customercli", {
  useMongoClient: true,
});

// Add customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New Customer added successfully");
    db.close();
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
      db.close();
    }
  );
};

//export { addCustomer, findCustomer };
module.exports = { addCustomer, findCustomer };
