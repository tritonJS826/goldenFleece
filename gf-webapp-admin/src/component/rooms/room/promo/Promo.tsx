import React, {useState} from "react";
import {RoomType} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import styles from "./promo.module.scss";

export const Promo = ({room}: RoomType) => {
  const [isHover, setIsHover] = useState(false);
  const [imgChangeModal, setImgChangeModal] = useState(false);
  const [promoUrl, setPromoUrl] = useState("");

  const hoverHandler = () => {
    setIsHover(prev => !prev);
  };

  const saveHandler = () => {
    setImgChangeModal(prev => !prev);
    room.promo = promoUrl;
    saveRoom(room);
    setPromoUrl("");
  };

  const closeModal = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    target.classList.contains(styles.imgSrc) && setImgChangeModal(prev => !prev);
  };

  return (
    <div className={styles.promo}>
      <p>
        Promo
      </p>
      <div className={styles.container}>
        <div className={styles.imgContainer}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          <img className={styles.image}
            src={room.promo}
            alt="room-promo"
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
    </div>
  );
};