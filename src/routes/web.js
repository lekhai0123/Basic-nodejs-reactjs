import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
import apiController from "../controller/apiController";
const router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.handleAccessWeb);
  router.get("/users", userController.handleUser);
  router.post("/users/create-user", userController.handleCreateUser);
  router.post("/delete-user/:id", userController.handleDeleteUser);
  router.post("/update-user/:id", userController.getUser);
  router.post("/users/update-user", userController.updateUser);
  router.get("/api/test-api", apiController.testAPI);
  return app.use("/", router);
};

export default initWebRoute;
