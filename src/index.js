import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
require("dotenv").config();
import bodyParser from "body-parser";
import connection from "./config/connectDB";
import initApiRoute from "./routes/api";
import cors from "./config/cors";

const PORT = process.env.PORT || 8080;
const app = express();

//config cors
cors(app);

//config viewEngine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//check db connection
connection();

//init webRoute
initWebRoute(app);
initApiRoute(app);

app.listen(PORT, () => {
  console.log("Project is running on PORT: " + PORT);
});
