import axios from "axios";

const registerUser = (username, sex, address, email, phone, password, confirmPassword) => {
  return axios.post("http://localhost:8081/api/register", {
    username,
    sex,
    address,
    email,
    phone,
    password,
    confirmPassword,
  });
};

export { registerUser };
