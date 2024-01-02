import mongoose from "mongoose";

// customer Schema

const customerSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  phone: { type: String },
  email: { type: String },
});

export default mongoose.models.Customer ||
  mongoose.model("Customer", customerSchema);
