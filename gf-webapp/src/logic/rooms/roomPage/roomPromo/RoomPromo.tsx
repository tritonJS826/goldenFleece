import {Information} from "src/logic/rooms/roomPage/roomPromo/information/Information";
import {Title} from "src/logic/rooms/roomPage/roomPromo/title/Title";
import {Price} from "src/model/Price/Price";
import {RoomServices} from "src/model/Room/RoomServices";

interface RoomPromoProps {
  promoImgUrl: string;
  description: string;
  roomNumber: number;
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
        description={props.description}
        promoImgUrl={props.promoImgUrl}
        roomNumber={props.roomNumber}
      />
      <Information
        roomNumber={props.roomNumber}
        price={props.price}
        services={props.services}
      />
    </div>
  );
};