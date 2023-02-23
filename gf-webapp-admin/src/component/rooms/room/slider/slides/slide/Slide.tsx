import * as React from "react";
import {useState} from "react";
import {IRoom} from "../../../../../../model/room";
import {saveRoom} from "../../../../../../service/room";
import styles from "./slide.module.scss";

export const Slide = ({room, slide}:{room: IRoom, slide: string}) => {
  const [isHover, setIsHover] = useState(false);
  const [isImgModalShow, setIsImgModalShow] = useState(false);
  const [promoUrl, setPromoUrl] = useState("");

  const hoverHandler = () => {
    setIsHover(prev => !prev);
  };

  const saveHandler = () => {
    setIsImgModalShow(prev => !prev);
    // room.slide = promoUrl;

    saveRoom(room);
    setPromoUrl("");
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
            src={String(room[(slide as keyof IRoom)])}
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