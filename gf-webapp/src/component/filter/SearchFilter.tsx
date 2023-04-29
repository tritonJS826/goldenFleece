import {useEffect} from "react";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {useSearchParams} from "react-router-dom";
import {FilterInput, URL_QUERY_KEYS, InputType} from "./FilterInput";


export const SearchFilter = () => {
  const {bookingRoomForm} = useDictionary().dictionary;
  const [params, setParams] = useSearchParams();
  const {searchValue, setSearchValue} = useFilterRooms();

  useEffect(() => {
    if (params.has(URL_QUERY_KEYS.Search)) {
      setSearchValue(params.get(URL_QUERY_KEYS.Search) as string);
    }
  }, []);

  const onChangeInput = (event: React.ChangeEvent<InputType>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const isValueExist = searchValue !== "";

    const allParams = [...params];
    const paramsWithoutSearch = allParams
      .filter(param => param[0] !== URL_QUERY_KEYS.Search);

    if (isValueExist) {
      setParams([...paramsWithoutSearch, [URL_QUERY_KEYS.Search, searchValue]]);
    } else {
      setParams(paramsWithoutSearch);
    }
  }, [searchValue]);

  return (
    <FilterInput
      type="text"
      name="Search"
      value={searchValue}
      onChange={onChangeInput}
    />
  );
};