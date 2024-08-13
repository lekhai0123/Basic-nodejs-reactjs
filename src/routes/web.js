import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
const router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.handleAccessWeb);
  router.get("/users", userController.handleUser);
  router.post("/users/create-user", userController.handleCreateUser);
  return app.use("/", router);
};

export default initWebRoute;
