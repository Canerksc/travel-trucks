import { FaStar } from "react-icons/fa";
import styles from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
 
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar 
        key={i} 
        color={i < rating ? "#FFC531" : "#F2F4F7"} 
        size={16}
      />
    ));
  };

  return (
    <div className={styles.reviewsContainer}>
      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <div className={styles.header}>
            <div className={styles.avatar}>
              {review.reviewer_name.charAt(0)} 
            </div>
            <div>
              <p className={styles.name}>{review.reviewer_name}</p>
              <div className={styles.stars}>
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
          </div>
          <p className={styles.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;