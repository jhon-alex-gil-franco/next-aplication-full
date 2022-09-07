import React from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import axios from "axios";

import { useToast } from "../context/toastContex";

import styles from "../styles/Card.module.css";

const Cards = ({ props }) => {
  const { id, autor, nombre, img, uri } = props;
  const { showToast, setShowToast } = useToast();
  const data = {
    id,
    autor,
    nombre,
    img,
    uri,
    email_user: sessionStorage.email,
  };
  const handleAddFavorite = async () => {
    try {
      const response = await axios.post("/api/favorites/favorites", data);
      console.log(response)
      if (response.data.message == "id already exists") {
       
        setShowToast(true);
      }
      if (response.status == 400) {
     
        // setShowToast(false);
      }
    } catch (error) {}
  };

  return (
    <>
      <Card className={styles.card_body}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{"Autor:  " + autor}</Card.Text>
        </Card.Body>

        <Card.Body>
          <Link href="#">
            <button className={styles.buton_card} onClick={handleAddFavorite}>
              Agregar a favoritos
            </button>
          </Link>

          <br />
          <Link href={uri}>
            <button className={styles.buton_card}>Ir al sitio</button>
          </Link>
         
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
