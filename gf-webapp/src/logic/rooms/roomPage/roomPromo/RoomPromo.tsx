import React from "react";
import {Room} from "../../../../model/Room";
import {Information} from "./information/Information";
import {Title} from "./title/Title";

interface PromoProps {
  room: Room
}

export const RoomPromo = (props: PromoProps) => {
  return (
    <div>
      <Title room={props.room} />
      <Information room={props.room} />
    </div>
  );
};