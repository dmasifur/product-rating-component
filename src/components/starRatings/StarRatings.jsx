import { useState } from "react";
import styles from "./StarRatingsStyles.module.css";
import { FaStar } from "react-icons/fa";

const StarRatings = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave(getCurrentIndex) {
    setHover(rating);
  }

  return (
    <div className={styles.starRatings}>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating) ? styles.active : styles.inactive
            }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRatings;
