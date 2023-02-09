import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

type RoomParams = {
  id: string;
};

export const RoomPage = () => {
  const {id} = useParams<RoomParams>();
  const [room, setRoom] = useState("");

  const url = "http://localhost:3600/api/rooms";

  const fetchData = async () => {
    const res = await fetch(url);
    const final = await res.json();
    console.log(final[Number(id)]);
    setRoom(final[Number(id)].apartmentsType);
    return final[Number(id)].apartmentsType;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>
        {`Room ${room}`}
      </h1>
    </div>
  );
};