import {useEffect} from "react";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {useSearchParams} from "react-router-dom";
import {FilterInput, URL_QUERY_KEYS, InputType} from "./FilterInput";


export const DateOutFilter = () => {
  const {bookingRoomForm} = useDictionary().dictionary;
  const [params, setParams] = useSearchParams();
  const {dateOutValue, setDateOutValue} = useFilterRooms();

  useEffect(() => {
    if (params.has(URL_QUERY_KEYS.DateOut)) {
      setDateOutValue(params.get(URL_QUERY_KEYS.DateOut) as string);
    }
  }, []);

  const onChangeInput = (event: React.ChangeEvent<InputType>) => {
    setDateOutValue(event.target.value);
  };

  useEffect(() => {
    const isValueExist = dateOutValue !== "";

    const allParams = [...params];
    const paramsWithoutDateOut = allParams
      .filter(param => param[0] !== URL_QUERY_KEYS.DateOut);

    if (isValueExist) {
      setParams([...paramsWithoutDateOut, [URL_QUERY_KEYS.DateOut, dateOutValue]]);
    } else {
      setParams(paramsWithoutDateOut);
    }
  }, [dateOutValue]);


  const minDate = new Date().toISOString().split("T")[0];
  console.log(minDate);


  return (
    <FilterInput
      type="date"
      name={bookingRoomForm.dateOut}
      min={minDate}
      value={dateOutValue}
      onChange={onChangeInput}
    />
  );
};