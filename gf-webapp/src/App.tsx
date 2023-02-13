import React from "react";
import {Routes, Route} from "react-router-dom";
import {MainPage} from "./logic/mainPage/MainPage";
import {AboutUsPage} from "./logic/aboutUsPage/AboutUsPage";
import {RoomsPage} from "./logic/rooms/roomsPage/RoomsPage";
import {RoomPage} from "./logic/rooms/roomPage/RoomPage";
import {ContactsPage} from "./logic/contactsPage/ContactsPage";
import {BookingPage} from "./logic/bookingPage/BookingPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
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
        <Route path="/rooms/:id"
          element={<RoomPage />}
        />
        <Route path="/booking"
          element={<BookingPage />}
        />
        <Route path="/contacts"
          element={<ContactsPage />}
        />

      </Routes>
    </div>
  );
}

export default App;
