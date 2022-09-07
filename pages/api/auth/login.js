import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const handlerLogin = (req, res) => {
  const user = {
    email: "admin@gmail.com",
    username: "User-01",
    password: "admin",
  };

  const { email, password } = req.body;
  if (email == user.email && password == user.password) {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 100) + 60 * 60 * 24,
        email: user.email,
        username: user.username,
      },
      "mySeed"
    );
    const serialized = serialize("TokenUser", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialized);
    return res.status(200).json({
      username:user.username,
      email:user.email
    });
  } else {
    res.status(401).json({ error: "Password or email incorret" });
  }
};

export default handlerLogin;
