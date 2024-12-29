import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // console.log("MongoDB connected!! DB Host: ", connectionInstance);
  } catch (error) {
    console.log("ERROR:", error);
    process.exit(1);
    // OR
    // throw error
  }
};

export default connectDB;

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

(async () => {

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log("App is listening on port ${process.env.PORT}");
    });
    
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();
*/
