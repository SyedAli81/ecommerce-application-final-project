import bcrypt from "bcryptjs";

const users = [
  {
    name: "user",
    email: "user@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
