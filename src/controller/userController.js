import userService from "../service/userService";
const handleUser = async (req, res) => {
  const userList = await userService.getList();
  return res.render("user.ejs", { userList });
};
const handleCreateUser = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;
  await userService.createNewUser(email, password, username);
  return res.redirect("/users");
};
const handleDeleteUser = (req, res) => {
  userService.deleteUser(req.params.id);
  return res.redirect("/users");
};
module.exports = {
  handleUser,
  handleCreateUser,
  handleDeleteUser,
};
