import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import {DictionaryContext, DictionaryType} from "src/context/Context";
import {MainPage} from "src/logic/mainPage/MainPage";
import {AboutUsPage} from "src/logic/aboutUsPage/AboutUsPage";
import {RoomsPage} from "src/logic/rooms/roomsPage/RoomsPage";
import {RoomPage} from "src/logic/rooms/roomPage/RoomPage";
import {ContactsPage} from "src/logic/contactsPage/ContactsPage";
import {BookingPage} from "src/logic/bookingPage/BookingPage";
import ScrollToTop from "src/utils/scrollToTop";
import en from "src/locales/en/translation.json";


function App() {
  const [dictionary, setDictionary] = useState<DictionaryType>(en);

  return (
    <div className="app">
      <DictionaryContext.Provider
        value={{dictionary, setDictionary}}
      >
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<MainPage />}
          />
          <Route
            path="/about"
            element={<AboutUsPage />}
          />
          <Route
            path="/rooms"
            element={<RoomsPage />}
          />
          <Route
            path="/rooms/:id"
            element={<RoomPage />}
          />
          <Route
            path="/booking"
            element={<BookingPage />}
          />
          <Route
            path="/contacts"
            element={<ContactsPage />}
          />
        </Routes>
      </DictionaryContext.Provider>
    </div>
  );
}

export default App;
