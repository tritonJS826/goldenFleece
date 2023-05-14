import {useState} from "react";
import {Button} from "gf-ui-lib/src/components/Button/Button";
import {Title} from "gf-ui-lib/src/components/Title/Title";
import {TitleLevel} from "gf-ui-lib/src/components/Title/TitleLevel";
import styles from "src/component/rooms/room/promo/Promo.module.scss";

interface PromoProps {
  promoImageUrl: string;
  titleText: string;
  updatePromoImageUrl: (promoImageUrl: string) => void;
}

export const Promo = (props: PromoProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isImgModalShow, setIsImgModalShow] = useState(false);
  const [newPromoImageUrl, setNewPromoImageUrl] = useState("");
  const [promoImageUrl, setPromoImageUrl] = useState(props.promoImageUrl);

  const hoverHandler = () => {
    setIsHover(!isHover);
  };

  const saveHandler = () => {
    setIsImgModalShow(!isImgModalShow);
    props.updatePromoImageUrl(newPromoImageUrl);
    setPromoImageUrl(newPromoImageUrl);
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
        level={TitleLevel.h4}
        text={props.titleText}
      />
      <div className={styles.container}>
        <div className={styles.imgContainer}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          {promoImageUrl ?
            (
              <img className={styles.image}
                src={promoImageUrl}
                alt="room-promo"
              />
            )
            :
            (
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