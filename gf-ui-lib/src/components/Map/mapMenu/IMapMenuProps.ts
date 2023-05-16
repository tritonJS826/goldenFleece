import {IMarker} from "src/components/Map/mapContent/marker/IMarker";

export interface IMapMenuProps {
  menuItemHandler: (marker: IMarker) => void;
}