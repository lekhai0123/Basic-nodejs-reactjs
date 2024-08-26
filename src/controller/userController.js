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
const handleDeleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  return res.redirect("/users");
};
const getUser = async (req, res) => {
  const id = req.params.id;
  const user = await userService.getUserById(id);
  return res.render("updateUser.ejs", { user });
};

const updateUser = async (req, res) => {
  const id = req.body.id;
  const username = req.body.username;
  const email = req.body.email;
  await userService.updateUser(username, email, id);
  return res.redirect("/users");
};
module.exports = {
  handleUser,
  handleCreateUser,
  handleDeleteUser,
  getUser,
  updateUser,
};
