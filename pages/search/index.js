import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

import { useToast } from "../../context/toastContex";
import styles from "../../styles/Search.module.css";
import Layout from "../../components/Layout.js";
import Cards from "../../components/Card";
import { getOptions } from "../../services/optionServises";
import Toast from "../../components/toast";

const SearchScreen = ({ options }) => {
  const { showToast, setShowToast } = useToast();
  const [art, setArt] = useState([]);
  const [selectValue, setSelectValue] = useState({ autor: "" });
  const [inputValue, setInputValue] = useState("");

  const handleChangeSelect = (e) => {   
    setSelectValue({ autor: e.target.value });
  };

  const handleChangeInput = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearchAutor = async () => {
    const { autor } = selectValue;
    try {
      if (autor != "null") {
        const request = await fetch(
          `https://www.rijksmuseum.nl/api/en/collection?key=KHn4xrLx&involvedMaker=${autor}&ps=20&toppieces=true`
        );
        const artworks = await request.json();

        setArt(artworks.artObjects);
      }

      // console.log(art)
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchTitle = async () => {
    const{input}=inputValue
    
    try {
      
        const request = await fetch(
          `https://www.rijksmuseum.nl/api/en/collection?key=KHn4xrLx&title=${input}&ps=1&toppieces=true&ps=20`
        );
        const artworks = await request.json();
        setArt(artworks.artObjects);      
    } catch (error) {
      console.log(error);
    }
  };

console.log(showToast)
  return (
    <Layout title="search">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sidebar}>
            <Container>
              <select
                onChange={handleChangeSelect}
                name="select"
                className={styles.search_select}
              >
                <option value="null">Autores</option>
                {options &&
                  options.map((element) => (
                    <option key={element.id}>{element.name}</option>
                  ))}
              </select>
              <Button
                variant="outline-light"
                className={styles.button_select}
                onClick={handleSearchAutor}
              >
                Buscar{" "}
              </Button>
            </Container>
          </div>
          <div className={styles.search}>
            <Container>
              <div className="d-flex">
                <Form.Control
                  placeholder="Search"
                  className={styles.search_input}
                  aria-label="Search"
                  name="input"
                  onChange={handleChangeInput}
                />
                <Button 
                variant="outline-light" 
                className={styles.button_input}
                onClick={handleSearchTitle}
                >
                  Buscar
                </Button>
              </div>
            </Container>
          </div>
        </div>
        <div className={styles.main}>

          <Container>
          {showToast == true && <Toast  props={{title:"Existe",description:"Esta obra ya esta agregada"}}  />}
          </Container>
          <h3 className={styles.subtitle}>Galeria</h3>
       
         
          <Container className={styles.container_main}>
            {art &&
              art.map((element) => (
                element.hasImage&&
                <Cards
                  key={element.id}
                  props={{
                    id: element.id,
                    autor: element.principalOrFirstMaker,
                    nombre: element.title,
                    img: element.webImage.url,
                    uri: element.links.web,
                  }}
                ></Cards>
              ))}
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await getOptions();

  return {
    props: {
      options: res,
    },
  };
}
export default SearchScreen;
