


export async function getUser() {
  const request = await fetch("/api/favorites/favorites");
//   const request = await axios.get("/api/auth/profile");

  const user = await request.json();

  return user;
}

export async function getLatesUser() {
  const user = await getUser();
  return user;
}
