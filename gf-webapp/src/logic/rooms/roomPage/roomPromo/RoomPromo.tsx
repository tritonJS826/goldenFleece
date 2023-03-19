import {Information} from "./information/Information";
import {Title} from "./title/Title";
import {Apartments} from "../../../../model/Room/Apartments";
import {Price} from "../../../../model/Price";
import {ApartmentServices} from "../../../../model/Room/ApartmentServices";

interface RoomPromoProps {
  promoImgUrl: string;
  description: string;
  apartmentsType: Apartments;
  /**
   * Formatted price
   */
  price: Price;
  service: ApartmentServices[];
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
        services={props.service}
      />
    </div>
  );
};