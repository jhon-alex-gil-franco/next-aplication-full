import { serialize } from "cookie";

 function handlerLogout(req, res) {

  const {TokenUser } = req.cookies;
  if (!TokenUser) {
    return res.status(401).json({ error: "Not logged" });
  }

  const serialized = serialize("TokenUser", null, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  res.setHeader("Set-Cookie", serialized);
  return res.status(200).json({
    message: "Logout",
  });
}

export default handlerLogout;