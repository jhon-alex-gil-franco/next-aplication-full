import {conn} from"../../utils/database"


 const handlerPing = async(req,res)=> {
  await conn.query('SELECT NOW()', (err, resp) => {
    if(!err){

     res.status(200).json({ message: "Conected", time: resp.rows[0].now });
        conn.end()
    }else{
        res.status(500).json({ message: "Conectexion fail"}); 
    }
  })

//   res.status(200).json({ response });
}
export default  handlerPing;