import Toast from "react-bootstrap/Toast";
import styles from "../styles/Toast.module.css";

import { useToast } from "../context/toastContex";

const Alert = ({ props }) => {
  const { title, description } = props;
  const { showToast, setShowToast } = useToast();

  return (
    <>
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        className={styles.toast}
      >
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{description}</Toast.Body>
      </Toast>
    </>
  );
};

export default Alert;
