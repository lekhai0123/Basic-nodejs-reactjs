// Get the client
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";

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
  const connect = await conn();
  let hashedPass = hashPassword(password);
  const [rows, fields] = await connect.execute(
    "INSERT INTO user (email, password, username) values (?,?,?)",
    [email, hashedPass, username]
  );
};

const getList = async () => {
  const connect = await conn();
  const [rows, fields] = await connect.execute("select * from user");
  return rows;
};

const deleteUser = async (id) => {
  const connect = await conn();
  const [rows, fields] = await connect.execute("delete from user where id=?", [
    id,
  ]);
};

const getUserById = async (id) => {
  const connect = await conn();
  const [rows, fields] = await connect.execute(
    "select * from user where id=?",
    [id]
  );
  return rows;
};

const updateUser = async (username, email, id) => {
  const connect = await conn();
  const [rows, fields] = await connect.execute(
    "update user set username = ?, email = ? where id = ?",
    [username, email, id]
  );
  return rows;
};
module.exports = {
  createNewUser,
  getList,
  deleteUser,
  getUserById,
  updateUser,
};
