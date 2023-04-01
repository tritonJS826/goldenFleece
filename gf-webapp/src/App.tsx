import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import {DictionaryContext, DictionaryType} from "src/logic/DictionaryContext/useDictionary";
import ScrollToTop from "src/utils/scrollToTop";
import en from "src/locales/en/translation.json";
import {pages} from "src/pages";

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
            path={pages.main.path}
            element={pages.main.element}
          />
          <Route
            path={pages.aboutUs.path}
            element={pages.aboutUs.element}
          />
          <Route
            path={pages.rooms.path}
            element={pages.rooms.element}
          />
          <Route
            path={pages.room.path(":id")}
            element={pages.room.element}
          />
          <Route
            path={pages.booking.path}
            element={pages.booking.element}
          />
          <Route
            path={pages.contacts.path}
            element={pages.contacts.element}
          />
        </Routes>
      </DictionaryContext.Provider>
    </div>
  );
}

export default App;
