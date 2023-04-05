import {Link} from "react-router-dom";
import {Room} from "src/model/Room/Room";
import {ServicesList} from "src/component/rooms/roomSimplified/overlay/servicesList/ServicesList";
import styles from "src/component/rooms/roomSimplified/overlay/Overlay.module.scss";

interface OverlayProps {
  room: Room;
}

export const Overlay = (props: OverlayProps) => {

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