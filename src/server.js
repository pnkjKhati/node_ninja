import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });
connectDB()
  .then(
    app.listen(process.env.PORT || 8001, () => {
      console.log(`Server running on ${process.env.PORT || 8001}`);
    })
  )
  .catch((error) => {
    console.log("Mongo DB connection Failed", error);
  });
