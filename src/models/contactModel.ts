import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },

  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
});

const Contact =
  mongoose.models.contacts || mongoose.model("contacts", contactSchema);

export default Contact;
