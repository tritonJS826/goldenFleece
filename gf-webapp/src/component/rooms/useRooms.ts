import React, {useEffect, useState} from "react";
import {Room} from "../../model/Room/Room";
import {RoomApiService} from "../../service/RoomApi/RoomApi";

export function useRooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  async function getRooms() {
    try {
      const res = await RoomApiService.getAllRooms();
      setRooms(res);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getRooms();
  }, []);

  return {rooms};
}