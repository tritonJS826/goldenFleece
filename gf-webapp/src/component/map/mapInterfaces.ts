export interface IMarker {
  id: number;
  name: string;
  x: number;
  y: number;
  markerType: string;
  imgUrl: string;
  description: string;
}


export type mapContent = {
  mouseDownHandler: (e: React.MouseEvent) => void;
}

export interface IMapContext {
  markers: IMarker[];
  menuItem: IMarker | null;
  setMenuItem: React.Dispatch<React.SetStateAction<IMarker | null>>;
}

export interface IMapMenuProps {
  menuItemHandler: (marker: IMarker) => void;
}
