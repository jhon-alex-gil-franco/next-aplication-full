import axios from "axios";


export async function getUser() {
  const request = await fetch("https://git.heroku.com/next-application-web.git/api/favorites/favorites");
//   const request = await axios.get("/api/auth/profile");

  const user = await request.json();

  return user;
}

export async function getLatesUser() {
  const user = await getUser();
  return user;
}
