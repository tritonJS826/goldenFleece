import React from "react";
import {IRoom} from "../../../model/room";
import {ApartmentsType} from "./apartmentType/ApartmentType";
import {Price} from "./price/Price";
import styles from "./room.module.scss";

export const Room = ({room}: {room:IRoom}) => {
  return (
    <ul className={styles.room}>
      <ApartmentsType room={room} />
      <li>
        <label htmlFor={`desc-${room.id}`}>
          Room description
        </label>
        <input type="text"
          id={`desc-${room.id}`}
          defaultValue={room.description}
        />
      </li>
      <li>
        <label htmlFor={`desc-long-${room.id}`}>
          Room long description
        </label>
        <input type="text"
          id={`desc-long-${room.id}`}
          defaultValue={room.descriptionLong}
        />
      </li>
      <li>
        <label htmlFor={`services-${room.id}`}>
          Room services
        </label>
        <input type="text"
          id={`services-${room.id}`}
          defaultValue={room.services}
        />
      </li>
      <li>
        <label htmlFor={`rating-${room.id}`}>
          Room rating
        </label>
        <input type="text"
          id={`rating-${room.id}`}
          defaultValue={room.rating}
        />
      </li>
      <Price room={room} />
      <li>
        Promo
        <br />
        <img width={200}
          height={200}
          src={room.promo}
          alt="room-promo"
        />
      </li>

      <li>
        Slider
        <div className={styles.slides}>
          <img width={200}
            height={200}
            src={room.slider}
            alt="slide"
          />
          <img width={200}
            height={200}
            src={room.slider2}
            alt="slide2"
          />
          <img width={200}
            height={200}
            src={room.slider3}
            alt="slide3"
          />
          <img width={200}
            height={200}
            src={room.slider4}
            alt="slide4"
          />
          <img width={200}
            height={200}
            src={room.slider5}
            alt="slide5"
          />
        </div>
      </li>

    </ul>
  );
};
