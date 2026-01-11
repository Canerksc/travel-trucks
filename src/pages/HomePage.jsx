import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Campers of your dreams</h1>
      <p className={styles.subtitle}>You can find everything you want in our catalog</p>
      <Link to="/catalog" className={styles.ctaButton}>
        View Now
      </Link>
    </div>
  );
};
export default HomePage;