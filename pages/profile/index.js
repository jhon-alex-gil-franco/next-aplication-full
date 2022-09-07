import { Container } from "react-bootstrap";

import { useUser } from "../../context/userContext";
import { getUser } from "../../services/userService";
import Layout from "../../components/Layout";
import styles from "../../styles/Profile.module.css";

const Profile = ({ user }) => {
  const {userSession, setUserSession}=useUser();
  const{username,email}=userSession
  return (
    <Layout title="profile">
      <Container className={styles.container_page}>
        <div className={styles.title}>
          <h3>{username}</h3>
          <p>{email}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.sidebar}>
            <h4>Favoritos</h4>
            <div className={styles.list}>
              {user &&
                user.map((element) => (
                  <a key={element.id}>* {element.nombre}</a>
                ))}
            </div>
            <div className={styles.main}></div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await getUser();

  return {
    props: {
      user: res,
    },
  };
}

export default Profile;
