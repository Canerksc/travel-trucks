import Categories from "../Categories/Categories"; // Var olan bileşeni çağırıyoruz
import styles from "./Features.module.css";

const Features = ({ camper }) => {
  return (
    <div className={styles.container}>
      {/*  İkonlar */}
      <Categories camper={camper} />

      {/* Teknik Detay Tablosu */}
      <h3 className={styles.title}>Vehicle details</h3>
      <ul className={styles.detailsList}>
        <li className={styles.detailItem}>
          <span>Form</span>
          <span className={styles.value}>{camper.form}</span>
        </li>
        <li className={styles.detailItem}>
          <span>Length</span>
          <span className={styles.value}>{camper.length}</span>
        </li>
        <li className={styles.detailItem}>
          <span>Width</span>
          <span className={styles.value}>{camper.width}</span>
        </li>
        <li className={styles.detailItem}>
          <span>Height</span>
          <span className={styles.value}>{camper.height}</span>
        </li>
        <li className={styles.detailItem}>
          <span>Tank</span>
          <span className={styles.value}>{camper.tank}</span>
        </li>
        <li className={styles.detailItem}>
          <span>Consumption</span>
          <span className={styles.value}>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default Features;