import express from "express";
import * as dotenv from "dotenv";
import connection from './config/database.js'
dotenv.config();

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World 11111111!");
});

(async () => {
    try {
      await connection();
      app.listen(port, hostname, () => {
        console.log(`App listening on port ${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  })();
