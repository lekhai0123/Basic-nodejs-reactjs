// Get the client
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import db from "../models/index";
import { where } from "sequelize";

//create the connection to db
const conn = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "project1",
  });
  return connection;
};

//Generate a salt to add to the password before hashing
const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};
const createNewUser = async (email, password, username) => {
  let hashedPass = hashPassword(password);
  await db.User.create({
    username: username,
    email: email,
    password: hashedPass,
  });
};

const getList = async () => {
  let users = [];
  users = await db.User.findAll();
  return users;
};

const deleteUser = async (id) => {
  await db.User.destroy({
    where: {
      id: id,
    },
  });
};

const getUserById = async (id) => {
  const user = await db.User.findOne({
    where: {
      id: id,
    },
  });
  return user;
};

const updateUser = async (username, email, id) => {
  const newUser = await db.User.update(
    {
      email: email,
      username: username,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

module.exports = {
  createNewUser,
  getList,
  deleteUser,
  getUserById,
  updateUser,
};
