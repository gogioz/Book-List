import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import booksRoute from "./routes/booksRoute.js";

import { mongoDBURL, PORT } from "./config.js";

// run the app with express
const app = express();

// return the body in json format
app.use(express.json());

// app.use(
//   cors({
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers": "*",
//     },
//   })
// );

// option two: allow custom origins
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/books", booksRoute);

mongoose
  // connect to the database
  .connect(mongoDBURL)
  // hadle the promise
  .then(() => {
    console.log("App connected to database");
    // if its connected successuflly, make the app open in the port
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  })
  // if not handle the error
  .catch((err) => {
    console.log(err);
  });

// get the data
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome To MERN Stack Tutorial");
});

// middleware for parsing request body
// option one: allow all origins with default of cors
