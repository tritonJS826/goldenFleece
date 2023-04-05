import {useState} from "react";
import {Room} from "src/model/Room/Room";
import {saveRoom} from "src/service/RoomService";
import {Button} from "gf-ui-lib/components/Button/Button";
import styles from "src/component/rooms/room/rating/Rating.module.scss";

interface RatingProps {
  room:Room;
}

export const Rating = (props: RatingProps) => {
  const [rating, setRating] = useState(props.room.rating);
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const ratingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);
    if (value > 10) {
      value = 10;
    }
    if (value < 0) {
      value = 0;
    }
    setRating(value);
  };

  const saveHandler = () => {
    setIsEditFieldDisabled(true);
    props.room.rating = rating;
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };
  return (
    <div className={styles.rating}>
      <label htmlFor={`rating-${props.room.id}`}>
        Room rating
      </label>
      <div className={styles.container}>
        <input type="number"
          id={`rating-${props.room.id}`}
          value={rating}
          onChange={ratingHandler}
          disabled={isEditFieldDisabled}
          max={10}
        />
        <Button
          value={isEditFieldDisabled ? "Edit" : "Save"}
          onClick={isEditFieldDisabled ? fieldEditHandler : saveHandler}
        />
      </div>
    </div>
  );
};