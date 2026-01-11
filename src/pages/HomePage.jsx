import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import heroImage from "./Picture (1).png";

const HomePage = () => {
  return (
    <div 
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`
      }}
    >
      <h1 className={styles.title}>Campers of your dreams</h1>
      <p className={styles.subtitle}>You can find everything you want in our catalog</p>
      <Link to="/catalog" className={styles.ctaButton}>
        View Now
      </Link>
    </div>
  );
};
export default HomePage;