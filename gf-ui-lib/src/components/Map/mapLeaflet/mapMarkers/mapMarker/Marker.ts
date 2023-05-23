/**
 * Marker interface
 */
export interface Marker {
  /**
   * Marker id
   */
  id: number;
  /**
   * Marker name (location name)
   */
  name: string;
  /**
   * Marker latitude
   */
  latitude: number;
  /**
   * Marker longitude
   */
  longitude: number;
  /**
   * Marker type (type of location)
   */
  markerType: string;
  /**
   * Location image
   */
  imgUrl: string;
  /**
   * Location description
   */
  description: string;
  /**
   * Marker icon
   */
  markerIconUrl: string;
}