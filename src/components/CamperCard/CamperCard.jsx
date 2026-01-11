import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaRegHeart, FaHeart } from "react-icons/fa"; // İkonlar
import { toggleFavorite } from "../../redux/campersSlice";
import Categories from "../Categories/Categories"; // Rozetler için bileşenimiz
import styles from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorites);
  const isFavorite = favorites.includes(camper.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div className={styles.card}>
      {/* SOL: Görsel Alanı */}
      <div className={styles.imageWrapper}>
        <img 
          src={camper.gallery?.[0]?.thumb || camper.gallery?.[0]} 
          alt={camper.name} 
          className={styles.image} 
        />
      </div>

      {/* SAĞ: İçerik Alanı */}
      <div className={styles.content}>
        
        {/* 1. Başlık ve Fiyat Satırı */}
        <div className={styles.header}>
          <h2 className={styles.title}>{camper.name}</h2>
          <div className={styles.priceSection}>
            <span className={styles.price}>€{camper.price?.toFixed(2)}</span>
            <button 
                className={styles.heartBtn} 
                onClick={handleFavoriteClick}
            >
              {isFavorite ? (
                <FaHeart color="#E44848" size={24} />
              ) : (
                <FaRegHeart color="#101828" size={24} />
              )}
            </button>
          </div>
        </div>

        {/* 2. Rating ve Lokasyon Satırı */}
        <div className={styles.subHeader}>
          <div className={styles.rating}>
            <FaStar className={styles.starIcon} />
            <span className={styles.ratingText}>
              {camper.rating}({camper.reviews?.length} Reviews)
            </span>
          </div>
          <div className={styles.location}>
            <FaMapMarkerAlt className={styles.mapIcon} />
            <span>{camper.location}</span>
          </div>
        </div>

        {/* 3. Açıklama (Tek satır, üç nokta) */}
        <p className={styles.description}>
          {camper.description}
        </p>

        {/* 4. Kategoriler (Categories bileşenini kullanıyoruz) */}
        <div className={styles.categoriesWrapper}>
             <Categories camper={camper} />
        </div>

        {/* 5. Buton */}
        <Link 
            to={`/catalog/${camper.id}`} 
            className={styles.button}
            target="_blank" 
            rel="noopener noreferrer"
        >
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;