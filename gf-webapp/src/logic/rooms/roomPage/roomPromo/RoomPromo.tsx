import {Information} from "src/logic/rooms/roomPage/roomPromo/information/Information";
import {Title} from "src/logic/rooms/roomPage/roomPromo/title/Title";
import {RoomType} from "src/model/Room/RoomType";
import {Price} from "src/model/Price/Price";
import {RoomServices} from "src/model/Room/RoomServices";

interface RoomPromoProps {
  promoImgUrl: string;
  description: string;
  type: RoomType;
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
      />
      <Information
        type={props.type}
        price={props.price}
        services={props.services}
      />
    </div>
  );
};