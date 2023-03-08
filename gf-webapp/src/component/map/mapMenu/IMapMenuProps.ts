import {IMarker} from "../mapContent/marker/IMarker";

export interface IMapMenuProps {
  menuItemHandler: (marker: IMarker) => void;
}