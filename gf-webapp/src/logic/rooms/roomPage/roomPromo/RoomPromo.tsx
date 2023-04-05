import {Information} from "src/logic/rooms/roomPage/roomPromo/information/Information";
import {Title} from "src/logic/rooms/roomPage/roomPromo/title/Title";
import {Apartments} from "src/model/Room/Apartments";
import {Price} from "src/model/Price";
import {ApartmentServices} from "src/model/Room/ApartmentServices";

interface RoomPromoProps {
  promoImgUrl: string;
  description: string;
  apartmentsType: Apartments;
  /**
   * Formatted price
   */
  price: Price;
  services: ApartmentServices[];
}

export const RoomPromo = (props: RoomPromoProps) => {
  return (
    <div>
      <Title
        description={props.description}
        promoImgUrl={props.promoImgUrl}
      />
      <Information
        apartmentsType={props.apartmentsType}
        price={props.price}
        services={props.services}
      />
    </div>
  );
};