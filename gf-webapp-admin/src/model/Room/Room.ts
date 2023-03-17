import {NewRoom} from "./NewRoom";

type RoomArgs = NewRoom & {id: string};

export class Room extends NewRoom {

  /**
   * Room id
   */
  public id: string;

  constructor(args: RoomArgs) {
    super(args);
    this.id = args.id;
  }

}