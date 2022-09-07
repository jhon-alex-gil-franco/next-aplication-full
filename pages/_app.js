import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { ToastProvider } from "../context/toastContex";
import { UserProvider } from "../context/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </UserProvider>
  );
}

export default MyApp;
