import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
import apiController from "../controller/apiController";
const router = express.Router();

const initApiRoute = (app) => {
  router.get("/test-api", apiController.testAPI);
  router.post("/register", apiController.handleRegister);
  return app.use("/api/", router);
};

export default initApiRoute;
