import React from "react";
import {RoomType} from "../../../../model/room";
import {Information} from "./information/Information";
import {Title} from "./title/Title";

export const RoomPromo = ({room}: RoomType) => {
  return (
    <div>
      <Title room={room} />
      <Information room={room} />
    </div>
  );
};