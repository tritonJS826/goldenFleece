import React, {useState} from "react";
import {RoomType} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import styles from "./promo.module.scss";

export const Promo = ({room}: RoomType) => {
  const [isHover, setIsHover] = useState(false);
  const [isImgModalShow, setIsImgModalShow] = useState(false);
  const [newPromoImageUrl, setNewPromoImageUrl] = useState("");

  const hoverHandler = () => {
    setIsHover(!isHover);
  };

  const saveHandler = () => {
    setIsImgModalShow(!isImgModalShow);
    room.promo = newPromoImageUrl;
    saveRoom(room);
    setNewPromoImageUrl("");
  };

  const closeModal = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    target.classList.contains(styles.imgSrc) && setIsImgModalShow(!isImgModalShow);
  };

  return (
    <div className={styles.promo}>
      <p className={styles.title}>
        Promo
      </p>
      <div className={styles.container}>
        <div className={styles.imgContainer}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          {room.promo ?
            (
              <img className={styles.image}
                src={room.promo}
                alt="room-promo"
              />
            ) : (
              <p className={styles.addImage}>
                Add Image
              </p>
            )}

          {isHover &&
            (
              <div onClick={() => setIsImgModalShow(!isImgModalShow)}
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
              <input value={newPromoImageUrl}
                type="text"
                onChange={(e) => setNewPromoImageUrl(e.target.value)}
                placeholder="Enter image URL"
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