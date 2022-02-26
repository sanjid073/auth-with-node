import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Main = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/login");
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>fakebook</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Main;
