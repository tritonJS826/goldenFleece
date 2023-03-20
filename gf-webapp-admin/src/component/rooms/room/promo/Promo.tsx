import {Button} from "gf-ui-lib/components/Button/Button";
import {useState} from "react";
import {AddRoom, Room} from "src/model/Room/RoomDeprecated";
import {saveRoom} from "src/service/RoomService";
import styles from "src/component/rooms/room/promo/Promo.module.scss";

interface PromoProps {
  room:Room | AddRoom;
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
    props.room.promoImgUrl = newPromoImageUrl;
    saveRoom(props.room as Room);
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
          {props.room.promoImgUrl ?
            (
              <img className={styles.image}
                src={props.room.promoImgUrl}
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
              <Button
                type="button"
                onClick={saveHandler}
                value="Save"
              />
            </div>
          )
        }
      </div>
    </div>
  );
};