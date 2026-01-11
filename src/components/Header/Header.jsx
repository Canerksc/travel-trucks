import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import clsx from "clsx"; 
import logo from "../../assets/TravelTrucks.svg"; 

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <img src={logo} alt="TravelTrucks" className={styles.logoImage} />
      </NavLink>

      <nav className={styles.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;