import {IMarker} from "gf-ui-lib/src/components/Map/mapContent/marker/IMarker";

export interface IMapMenuProps {
  menuItemHandler: (marker: IMarker) => void;
}