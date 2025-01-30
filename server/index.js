import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://lestercuasay:Metalmonk1@socialapp.1y5hs.mongodb.net/?retryWrites=true&w=majority&appName=SocialApp";
const PORT = process.env.PORT || 5001;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
