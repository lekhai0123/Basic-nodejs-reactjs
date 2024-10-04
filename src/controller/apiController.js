const testAPI = (req, res) => {
  res.status(200).json({
    massage: "abc",
    api: "xyz",
  });
};
const handleRegister = (req, res) => {
  console.log(req.body);
};
module.exports = {
  testAPI,
  handleRegister,
};
