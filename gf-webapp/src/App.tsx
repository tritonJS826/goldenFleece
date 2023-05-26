import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import {DictionaryContext, DictionaryType} from "src/logic/DictionaryContext/useDictionary";
import ScrollToTop from "src/utils/scrollToTop";
import en from "src/locales/en/translation.json";
import {pages} from "src/pages";
import {FilterRoomsContext} from "src/component/filter/FilterContext";
import {
  defaultSearchValue,
  defaultAdultsValue,
  defaultChildrenValue,
  MIN_DATE_IN,
  MIN_DATE_OUT,
} from "src/component/filter/Filters";

function App() {
  const [dictionary, setDictionary] = useState<DictionaryType>(en);
  const [searchValue, setSearchValue] = useState(defaultSearchValue);
  const [dateInValue, setDateInValue] = useState(MIN_DATE_IN);
  const [dateOutValue, setDateOutValue] = useState(MIN_DATE_OUT);
  const [adultsValue, setAdultsValue] = useState(defaultAdultsValue);
  const [childrenValue, setChildrenValue] = useState(defaultChildrenValue);
  const [serviceValues, setServiceValues] = useState<string[]>([]);

  return (
    <div className="app">
      <DictionaryContext.Provider
        value={{dictionary, setDictionary}}
      >
        <FilterRoomsContext.Provider
          value={{
            searchValue,
            setSearchValue,
            dateInValue,
            setDateInValue,
            dateOutValue,
            setDateOutValue,
            adultsValue,
            setAdultsValue,
            childrenValue,
            setChildrenValue,
            serviceValues,
            setServiceValues,
          }}
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
        </FilterRoomsContext.Provider>
      </DictionaryContext.Provider>
    </div>
  );
}

export default App;
