import axios from "axios";


export async function getUser() {
  const request = await fetch("http://localhost:3000/api/favorites/favorites");
//   const request = await axios.get("/api/auth/profile");

  const user = await request.json();

  return user;
}

export async function getLatesUser() {
  const user = await getUser();
  return user;
}
