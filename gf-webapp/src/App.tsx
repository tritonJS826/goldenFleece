import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import {MainPage} from "./logic/mainPage/MainPage";
import {AboutUsPage} from "./logic/aboutUsPage/AboutUsPage";
import {RoomsPage} from "./logic/rooms/roomsPage/RoomsPage";
import {RoomPage} from "./logic/rooms/roomPage/RoomPage";
import {ContactsPage} from "./logic/contactsPage/ContactsPage";
import {BookingPage} from "./logic/bookingPage/BookingPage";
import ScrollToTop from "./utils/ScrollToTop";
import {CurrentLanguageContext} from "./context/Context";
import en from "../public/locales/en/translation.json";
import ru from "../public/locales/ru/translation.json";
import ge from "../public/locales/ge/translation.json";

function App() {
  const [language, setLanguage] = useState(localStorage.getItem("lang") === "en" ? en : localStorage.getItem("lang") === "ru" ? ru : ge);

  return (
    <div className="app">
      <CurrentLanguageContext.Provider
        value={{language, setLanguage}}
      >
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
      </CurrentLanguageContext.Provider>
    </div>
  );
}

export default App;
