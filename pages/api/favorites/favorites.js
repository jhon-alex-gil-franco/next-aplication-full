import { conn } from "../../../utils/database";

  const handlerQuery =async(req ,res)=> {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM fav ";
        const response = await conn.query(query);
        return res.json(response.rows);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    case "POST":
      try {
        const {id,nombre, autor,img,uri,email_user} = body;

        const query =
          "INSERT INTO fav(id,nombre, autor,img,uri,email_user) VALUES ($1, $2, $3 ,$4, $5, $6) RETURNING *";
        const values = [id,nombre, autor,img,uri,email_user];

        const response = await conn.query(query, values);

        return res.json({message:"save"});
      } catch (error) {
        if(error.code==23505){
          return res.json({ message:"id already exists" });
        }
        
      }
    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
}

export default handlerQuery;