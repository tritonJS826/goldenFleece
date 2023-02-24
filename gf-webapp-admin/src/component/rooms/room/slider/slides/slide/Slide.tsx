import React from "react";
import {useState} from "react";
import styles from "./slide.module.scss";

interface ISlide {
  slideImageURL: string;
  index: number;
  saveSliderImages:(imageURL: string, index: number) => void;
}

export const Slide = ({slideImageURL, index, saveSliderImages}: ISlide) => {

  const [isHover, setIsHover] = useState(false);
  const [isImgModalShow, setIsImgModalShow] = useState(false);
  const [currentImageUrl, setCurrentImageURL] = useState(slideImageURL);
  const [newImageUrl, setNewImageUrl] = useState("");

  const hoverHandler = () => {
    setIsHover(prev => !prev);
  };

  const saveImageHandler = () => {
    setIsImgModalShow(prev => !prev);
    saveSliderImages(newImageUrl, index);
    setCurrentImageURL(newImageUrl);
    setNewImageUrl("");
  };

  const closeModal = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    target.classList.contains(styles.imgSrc) && setIsImgModalShow(prev => !prev);
  };

  return(
    <li className={styles.slide}>
      <div className={styles.container}>
        <div className={styles.imgContainer}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          <img className={styles.image}
            src={currentImageUrl}
            alt="slide"
          />
          {isHover &&
            (
              <div onClick={() => setIsImgModalShow(prev => !prev)}
                className={styles.overlay}
              >
                <span>
                  Change image
                </span>
              </div>
            )
          }
        </div>

        {isImgModalShow &&
          (
            <div className={styles.imgSrc}
              onClick={(e) => closeModal(e)}
            >
              <input value={newImageUrl}
                type="text"
                onChange={(e) => setNewImageUrl(e.target.value)}
                placeholder="Enter URL"
              />
              <button
                onClick={saveImageHandler}
                className={styles.btnSave}
              >
                Save
              </button>
            </div>
          )
        }
      </div>

    </li>
  );
};