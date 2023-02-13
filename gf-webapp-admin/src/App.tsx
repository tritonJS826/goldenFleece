import React from "react";
import {Routes, Route} from "react-router-dom";
import {MainPage} from "./logic/mainPage/MainPage";
import {AboutUsPage} from "./logic/aboutUsPage/AboutUsPage";
import {RoomsPage} from "./logic/rooms/roomsPage/RoomsPage";
import {LoginPage} from "./logic/loginPage/LoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"
          element={<MainPage />}
        />
        <Route path="/login"
          element={<LoginPage />}
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
