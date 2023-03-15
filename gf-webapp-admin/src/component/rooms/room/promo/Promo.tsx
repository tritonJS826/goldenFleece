import {useState} from "react";
import {IRoom} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import styles from "./Promo.module.scss";

interface PromoProps {
  room:IRoom;
}


export const Promo = (props: PromoProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isImgModalShow, setIsImgModalShow] = useState(false);
  const [newPromoImageUrl, setNewPromoImageUrl] = useState("");

  const hoverHandler = () => {
    setIsHover(!isHover);
  };

  const saveHandler = () => {
    setIsImgModalShow(!isImgModalShow);
    props.room.promo = newPromoImageUrl;
    saveRoom(props.room);
    setNewPromoImageUrl("");
  };

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      target.classList.contains(styles.imgSrc) && setIsImgModalShow(!isImgModalShow);
    }
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
          {props.room.promo ?
            (
              <img className={styles.image}
                src={props.room.promo}
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
              onClick={closeModal}
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