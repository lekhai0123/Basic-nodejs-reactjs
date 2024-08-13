import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./routes/web";
require("dotenv").config();
import bodyParser from "body-parser";

const PORT = process.env.PORT || 8080;
const app = express();

//config viewEngine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init webRoute
initWebRoute(app);

app.listen(PORT, () => {
  console.log("Project is running on PORT: " + PORT);
});
