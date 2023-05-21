import {Information} from "src/logic/rooms/roomPage/roomPromo/information/Information";
import {Title} from "src/logic/rooms/roomPage/roomPromo/title/Title";
import {Price} from "src/model/Price/Price";
import {Dictionary} from "src/model/Dictionary/Dictionary";
import {RoomServices} from "src/model/Room/RoomServices";

interface RoomPromoProps {
  promoImgUrl: string;
  roomDescription: Dictionary;
  /**
   * Formatted price
   */
  price: Price;
  services: RoomServices[];
}

export const RoomPromo = (props: RoomPromoProps) => {
  return (
    <div>
      <Title
        promoImgUrl={props.promoImgUrl}
        roomDescription={props.roomDescription}
      />
      <Information
        roomDescription={props.roomDescription}
        price={props.price}
        services={props.services}
      />
    </div>
  );
};