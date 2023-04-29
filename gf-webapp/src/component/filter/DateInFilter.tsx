import {useEffect} from "react";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {useSearchParams} from "react-router-dom";
import {FilterInput, URL_QUERY_KEYS, InputType} from "./FilterInput";


export const DateInFilter = () => {
  const {bookingRoomForm} = useDictionary().dictionary;
  const [params, setParams] = useSearchParams();
  const {dateInValue, setDateInValue} = useFilterRooms();

  useEffect(() => {
    if (params.has(URL_QUERY_KEYS.DateIn)) {
      setDateInValue(params.get(URL_QUERY_KEYS.DateIn) as string);
    }
  }, []);

  const onChangeInput = (event: React.ChangeEvent<InputType>) => {
    setDateInValue(event.target.value);
  };

  useEffect(() => {
    const isValueExist = dateInValue !== "";

    const allParams = [...params];
    const paramsWithoutDateIn = allParams
      .filter(param => param[0] !== URL_QUERY_KEYS.DateIn);

    if (isValueExist) {
      setParams([...paramsWithoutDateIn, [URL_QUERY_KEYS.DateIn, dateInValue]]);
    } else {
      setParams(paramsWithoutDateIn);
    }
  }, [dateInValue]);


  const minDate = new Date().toISOString().split("T")[0];
  console.log(minDate);


  return (
    <FilterInput
      type="date"
      name={bookingRoomForm.dateIn}
      min={minDate}
      value={dateInValue}
      onChange={onChangeInput}
    />
  );
};