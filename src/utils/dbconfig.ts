import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongo connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "Mongo connection error , Please make sure db is running" + err
      );
      process.exit(0);
    });
  } catch (error) {
    console.error("Something went wrong");
    console.error(error);
  }
}
