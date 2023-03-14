import React from "react";
import {useState} from "react";
import styles from "./Slide.module.scss";

interface SlideProps {
  slideImageURL: string;
  index: number;
  deleteSlide: (slideIndex: number) => void
}

export const Slide = (props: SlideProps) => {

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
            src={props.slideImageURL}
            alt="slide"
          />
          {isHover &&
            (
              <div onClick={() => props.deleteSlide(props.index)}
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