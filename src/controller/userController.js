import userService from "../service/userService";
const handleUser = (req, res) => {
  return res.render("user.ejs");
};
const handleCreateUser = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;
  userService.createNewUser(email, password, username);
  userService.getList();
  return res.send("...");
};
module.exports = {
  handleUser,
  handleCreateUser,
};
