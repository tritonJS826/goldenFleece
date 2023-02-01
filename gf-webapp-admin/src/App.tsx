import React from "react";
import {Routes, Route} from "react-router-dom";
import {MainPage} from "./logic/mainPage/MainPage";
import {AboutUsPage} from "./logic/aboutUsPage/AboutUsPage";
import {RoomsPage} from "./logic/rooms/roomsPage/RoomsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"
          element={<MainPage />}
        />
        <Route path="/about"
          element={<AboutUsPage />}
        />
        <Route path="/rooms"
          element={<RoomsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
