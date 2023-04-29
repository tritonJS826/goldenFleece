import {useEffect} from "react";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {useSearchParams} from "react-router-dom";
import {FilterInput, URL_QUERY_KEYS, InputType} from "./FilterInput";


export const AdultsFilter = () => {
  const {bookingRoomForm} = useDictionary().dictionary;
  const [params, setParams] = useSearchParams();
  const {adultsValue, setAdultsValue} = useFilterRooms();

  useEffect(() => {
    if (params.has(URL_QUERY_KEYS.Adults)) {
      const adultsValueRaw = params.get(URL_QUERY_KEYS.Adults) as string;
      const adultsValueNumber: number = JSON.parse(adultsValueRaw);
      setAdultsValue(adultsValueNumber);
    }
  }, []);

  const onChangeInput = (event: React.ChangeEvent<InputType>) => {
    setAdultsValue(Number(event.target.value));
  };

  const minAdultsValue = 0;
  const defaultAdultsValue: number = minAdultsValue;

  useEffect(() => {
    const adultsValueStringified = JSON.stringify(adultsValue);
    const defaultAdultsValueStringified = JSON.stringify(defaultAdultsValue);
    const isValueExist = adultsValueStringified !== defaultAdultsValueStringified;

    const allParams = [...params];
    const paramsWithoutAdults = allParams
      .filter(param => param[0] !== URL_QUERY_KEYS.Adults);

    if (isValueExist) {
      setParams([...paramsWithoutAdults, [URL_QUERY_KEYS.Adults, adultsValueStringified]]);
    } else {
      setParams(paramsWithoutAdults);
    }
  }, [adultsValue]);

  const minDate = new Date().toISOString().split("T")[0];
  console.log(minDate);


  return (
    <FilterInput
      type="number"
      name={bookingRoomForm.adultsAmount}
      value={adultsValue}
      onChange={onChangeInput}
    />
  );
};