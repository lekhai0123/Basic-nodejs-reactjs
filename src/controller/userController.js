import userService from "../service/userService";
const handleUser = async (req, res) => {
  const userList = await userService.getList();
  return res.render("user.ejs", { userList });
};
const handleCreateUser = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;
  userService.createNewUser(email, password, username);
  return res.send("...");
};
module.exports = {
  handleUser,
  handleCreateUser,
};
