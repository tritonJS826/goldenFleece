import {Marker} from "../mapContent/marker/Marker";

export interface MapMenuProps {
  menuItemHandler: (marker: Marker) => void;
}