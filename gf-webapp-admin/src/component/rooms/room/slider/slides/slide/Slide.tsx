import React from "react";
import {useState} from "react";
import styles from "./slide.module.scss";

interface ISlide {
  slideImageURL: string;
  index: number;
  deleteSlide: (slideIndex: number) => void
}

export const Slide = ({slideImageURL, index, deleteSlide}: ISlide) => {

  const [isHover, setIsHover] = useState(false);

  const hoverHandler = () => {
    setIsHover(!isHover);
  };

  return(
    <li className={styles.slide}>
      <div className={styles.container}>
        <div className={styles.imgContainer}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          <img className={styles.image}
            src={slideImageURL}
            alt="slide"
          />
          {isHover &&
            (
              <div onClick={() => deleteSlide(index)}
                className={styles.overlay}
              >
                <span>
                  Delete
                </span>
              </div>
            )
          }
        </div>
      </div>

    </li>
  );
};