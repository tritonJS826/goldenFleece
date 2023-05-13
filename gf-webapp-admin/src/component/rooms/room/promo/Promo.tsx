import {useState} from "react";
import {Button} from "gf-ui-lib/src/components/Button/Button";
import {Room} from "src/model/Room/Room";
import {NewRoom} from "src/model/Room/NewRoom";
import {Title} from "gf-ui-lib/src/components/Title/Title";
import styles from "src/component/rooms/room/promo/Promo.module.scss";

interface PromoProps {
  room: Room | NewRoom;
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
      <Title
        level="h4"
        text="Room promo"
      />
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
                onClick={saveHandler}
                value="Save"
                size="innerContent"
              />
            </div>
          )
        }
      </div>
    </div>
  );
};