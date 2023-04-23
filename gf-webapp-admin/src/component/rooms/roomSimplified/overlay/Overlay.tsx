import {Link} from "react-router-dom";
import {Room} from "src/model/Room/Room";
import {ServicesList} from "src/component/rooms/roomSimplified/overlay/servicesList/ServicesList";
import styles from "src/component/rooms/roomSimplified/overlay/Overlay.module.scss";
import {RoomType} from "src/model/Room/RoomType";

interface OverlayProps {
  room: Room;
}

export const Overlay = (props: OverlayProps) => {

  const renderTitle = (roomType: RoomType): string => {
    switch(roomType) {
      case "Single": {
        return "Single room";
        break;
      }
      case "Double": {
        return "Double room";
        break;
      }
      case "Twin": {
        return "Twin room";
        break;
      }
      default: {
        return "Room not ready";
      }
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
          {renderTitle(props.room.type)}
        </h3>
        <ServicesList services={props.room.services} />
        <div className={styles.container}>
          <p>
            {`Rating: ${props.room.rating}`}
          </p>
          <p>
            {`Price: ${props.room.price.getFullPrice()}`}
          </p>
        </div>
      </Link>
    </div>
  );
};