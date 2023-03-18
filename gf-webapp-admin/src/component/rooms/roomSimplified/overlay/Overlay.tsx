import {Link} from "react-router-dom";
import {Room} from "../../../../model/Room/RoomDeprecated";
import {ServicesList} from "./servicesList/ServicesList";
import {Button} from "gf-ui-lib/components/Button/Button";
import {deleteRoom} from "src/service/RoomService";
import styles from "./Overlay.module.scss";

interface OverlayProps {
  room: Room;
}

export const Overlay = (props: OverlayProps) => {
  const deleteRoomHandler = () => {
    if (props.room.id) {
      deleteRoom(props.room.id);
      location.reload();
    }
  };

  return (
    <div
      className={styles.overlay}
    >
      <Link to={`rooms/${props.room.id}`}
        className={styles.info}
      >
        <h3>
          {`${props.room.apartmentsType} room`}
        </h3>
        <ServicesList services={props.room.services} />
        <div className={styles.container}>
          <p>
            {`Raiting: ${props.room.rating}`}
          </p>
          <p>
            {`Price: ${props.room.price.getFullPrice()}`}
          </p>
        </div>
      </Link>
      <Button
        onClick={deleteRoomHandler}
        value="Delete"
      />
    </div>
  );
};