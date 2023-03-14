import React from "react";
import {Room} from "../../../../model/Room";
import {Information} from "./information/Information";
import {Title} from "./title/Title";
import {Apartments} from "../../../../model/Room/Apartments";
import styles from "./RoomPromo.module.scss";

interface PromoProps {
  room: Room
}

interface RoomPromoProps {
  promoImgUrl: string;
  description: string;
  apartmentsType: Apartments;
  /**
   * Formatted price
   */
  price: string;
}

export const RoomPromo = (props: PromoProps) => {
  return (
    <div>
      <Title room={props.room} />
      <Information room={props.room} />
    </div>
  );
};