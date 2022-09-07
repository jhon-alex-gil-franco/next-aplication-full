import Link from "next/link";

import styles from "../styles/Home.module.css";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

function Home() {
  return (
    <div className={styles.container}>
      
     <Header title="Home"></Header>
      <main className={styles.main}>
        <h1 className={styles.title}>Explorador de Arte</h1>

        <p className={styles.description}>Descubra las mejores obras arte</p>

        <Link href="/auth">
          <button className={styles.button}>Iniciar sesión</button>
        </Link>
      </main>
      
     <Footer></Footer>

    </div>
  );
}

export default Home;