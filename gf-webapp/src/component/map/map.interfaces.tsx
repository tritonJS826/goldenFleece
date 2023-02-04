export interface IMarker {
  id: number,
  name: string,
  x: number,
  y: number,
  markerType: string
}


export type mapContent = {
  mouseDownHandler: (e: React.MouseEvent) => void;
}

export interface IMapContext {
  markers: IMarker[];
  menuItem: IMarker | null;
}

export interface IMapMenuProps {
  menuItemHandler: (marker: IMarker) => void;
}
