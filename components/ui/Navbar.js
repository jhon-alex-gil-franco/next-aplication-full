import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
 
import styles from "../../styles/Navbar.module.css";


function Navigation() {
  const router = useRouter();

  
  const logout = async () => {
    try {
      await axios.get("/api/auth/logout");
    } catch (error) {
      console.error(error.message);
    }
    router.push("/auth");
  };

  return (
    <Navbar
      bg="dark"
      className={styles.navbar}
      expand="lg"
      fixed="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className={styles.title_menu}>E-Arte</Navbar.Brand>
        <Navbar.Toggle
          className={styles.collapse}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.menu}>
            <Link href="/profile">Perfil</Link>
            <Link href="/search">Home</Link>
            <a className={styles.a} onClick={logout}>Cerrar sesión</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
