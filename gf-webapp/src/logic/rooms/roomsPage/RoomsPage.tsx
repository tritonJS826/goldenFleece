import React, {useState, useEffect} from "react";
import {PageBorder} from "../../../component/pageBorder/PageBorder";

export const RoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const url = "http://localhost:3600/api/rooms";

  const fetchData = async () => {
    const res = await fetch(url);
    const final = await res.json();
    console.log(final);
    setRooms(final);
    return final;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <PageBorder>
        <h1>
          {`Rooms: ${rooms.map((item) => {
            return item["apartmentsType"];
          })}`}
        </h1>
      </PageBorder>
    </div>
  );
};

