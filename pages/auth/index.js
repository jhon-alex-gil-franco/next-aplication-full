import { useState } from "react";
import axios from "axios";
import Router from "next/router";

import { useUser } from "../../context/userContext";
import { useToast } from "../../context/toastContex";
import Header from "../../components/ui/Header";
import Toast from "../../components/toast";
import styles from "../../styles/Auth.module.css";

export const LoginScreen = () => {
  const { showToast, setShowToast } = useToast();

  const {userSession, setUserSession}=useUser();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", credentials);
      if (response.status == 200) {
        setUserSession(response.data)
        sessionStorage.setItem('username',response.data.username)
        sessionStorage.setItem('email',response.data.email)
        Router.push("/search");
        setShowToast(false);
      } else {
        setShowToast(true);
      }
    } catch (error) {
      setShowToast(true);
    }
  };

  return (
    <div className="container col-md-6">
      <Header title="Login"></Header>

      <div className={styles.login_form}>
        <h3 className={styles.text_title}>Inicio de sesión</h3>

        <form onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <input
              type="text"
              className={styles.form_control}
              placeholder="Email"
              name="email"
              autoComplete="nope"
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="password"
              className={styles.form_control}
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <i className="fa-solid fa-circle-envelope"></i>
          </div>
          <div className={styles.form_group}>
            <input
              type="submit"
              className={styles.btnSubmit}
              value="Iniciar sesión"
            />
          </div>
          <div className={styles.form_group}>
            {showToast == true && <Toast props={{title:"Error",description:"Usuario y contraseña invalidos"}}  />}
            {/* <Alert res={toast}></Alert> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
