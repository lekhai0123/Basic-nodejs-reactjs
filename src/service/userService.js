// Get the client
import mysql from "mysql2";
import bcrypt from "bcryptjs";

//create the connection to db
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "project1",
});

//Generate a salt to add to the password before hashing
const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};
const createNewUser = (email, password, username) => {
  let hashedPass = hashPassword(password);
  connection.query(
    "INSERT INTO user (email, password, username) values (?,?,?)",
    [email, hashedPass, username]
  );
};
const getList = () => {
  connection.query("select * from user", function (err, result) {
    console.log(result);
  });
};
module.exports = {
  createNewUser,
  getList,
};
