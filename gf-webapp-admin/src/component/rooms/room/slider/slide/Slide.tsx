import * as React from "react";
import {useState} from "react";
import {IRoom} from "../../../../../model/room";
import {saveRoom} from "../../../../../service/room";
import styles from "./slide.module.scss";

export const Slide = ({room, slide}:{room: IRoom, slide: string}) => {
  const [isHover, setIsHover] = useState(false);
  const [imgChangeModal, setImgChangeModal] = useState(false);
  const [promoUrl, setPromoUrl] = useState("");

  const hoverHandler = () => {
    setIsHover(prev => !prev);
  };

  const saveHandler = () => {
    setImgChangeModal(prev => !prev);
    // room.slide = promoUrl;

    saveRoom(room);
    setPromoUrl("");
  };

  const closeModal = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    target.classList.contains(styles.imgSrc) && setImgChangeModal(prev => !prev);
  };
  return(
    <li className={styles.slide}>
      <div className={styles.container}>
        <div className={styles.imgContainer}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          <img className={styles.image}
            src={String(room[(slide as keyof IRoom)])}
            alt="slide"
          />
          {isHover &&
            (
              <div onClick={() => setImgChangeModal(prev => !prev)}
                className={styles.overlay}
              >
                <span>
                  Change image
                </span>
              </div>
            )
          }
        </div>

        {imgChangeModal &&
          (
            <div className={styles.imgSrc}
              onClick={(e) => closeModal(e)}
            >
              <input value={promoUrl}
                type="text"
                onChange={(e) => setPromoUrl(e.target.value)}
                placeholder="Enter URL"
              />
              <button
                onClick={saveHandler}
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