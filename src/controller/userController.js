// Get the client
import mysql from "mysql2/promise";

const handleUser = (req, res) => {
  return res.render("user.ejs");
};
const handleCreateUser = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;
  console.log(req.body);
  var connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "project1",
  });
  try {
    connection.query(
      "INSERT INTO user (email, password, username) values (?,?,?)",
      [email, password, username]
    );
  } catch (err) {
    console.log(err);
  }
  return res.send("...");
};
module.exports = {
  handleUser,
  handleCreateUser,
};
