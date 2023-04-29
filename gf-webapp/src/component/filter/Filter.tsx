import {useEffect} from "react";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {useSearchParams} from "react-router-dom";
import {FilterInput} from "./FilterInput";
import {SearchFilter} from "src/component/filter/SearchFilter";
import {DateInFilter} from "src/component/filter/DateInFilter";
import {DateOutFilter} from "src/component/filter/DateOutFilter";
import {AdultsFilter} from "src/component/filter/AdultsFilter";
import {ChildrenFilter} from "src/component/filter/ChildrenFilter";
import styles from "src/component/filter/Filter.module.scss";

// type InputType = HTMLInputElement | HTMLTextAreaElement;

// export enum URL_QUERY_KEYS {
//   Search = "search",
//   DateIn = "dateIn",
//   DateOut = "dateOut",
//   Adults = "adults",
//   Children = "children",
// }

export const Filter = () => {
  const {bookingRoomForm} = useDictionary().dictionary;

  // const [params, setParams] = useSearchParams();

  // const {searchValue, setSearchValue} = useFilterRooms();
  // const {dateInValue, setDateInValue} = useFilterRooms();
  // const {dateOutValue, setDateOutValue} = useFilterRooms();
  // const {adultsValue, setAdultsValue} = useFilterRooms();
  // const {childrenValue, setChildrenValue} = useFilterRooms();

  // useEffect(() => {
  //   if (params.has(URL_QUERY_KEYS.Search)) {
  //     setSearchValue(params.get(URL_QUERY_KEYS.Search) as string);
  //   }
  //   if (params.has(URL_QUERY_KEYS.DateIn)) {
  //     setDateInValue(params.get(URL_QUERY_KEYS.DateIn) as string);
  //   }
  //   if (params.has(URL_QUERY_KEYS.DateOut)) {
  //     setDateOutValue(params.get(URL_QUERY_KEYS.DateOut) as string);
  //   }
  //   if (params.has(URL_QUERY_KEYS.Adults)) {
  //     const adultsValueRaw = params.get(URL_QUERY_KEYS.Adults) as string;
  //     const adultsValueNumber: number = JSON.parse(adultsValueRaw);
  //     setAdultsValue(adultsValueNumber);
  //   }
  //   if (params.has(URL_QUERY_KEYS.Children)) {
  //     const childrenValueRaw = params.get(URL_QUERY_KEYS.Children) as string;
  //     const childrenValueNumber: number = JSON.parse(childrenValueRaw);
  //     setChildrenValue(childrenValueNumber);
  //   }
  // }, []);

  // const onChangeInput = (event: React.ChangeEvent<InputType>) => {
  //   setSearchValue(event.target.value);
  // };

  // useEffect(() => {
  //   const isValueExist = searchValue !== "";

  //   const allParams = [...params];
  //   const paramsWithoutSearch = allParams
  //     .filter(param => param[0] !== URL_QUERY_KEYS.Search);

  //   if (isValueExist) {
  //     setParams([...paramsWithoutSearch, [URL_QUERY_KEYS.Search, searchValue]]);
  //   } else {
  //     setParams(paramsWithoutSearch);
  //   }
  // }, [searchValue]);

  // const minAdultsValue = 0;
  // const defaultAdultsValue: number = minAdultsValue;

  // useEffect(() => {
  //   const adultsValueStringified = JSON.stringify(adultsValue);
  //   const defaultAdultsValueStringified = JSON.stringify(defaultAdultsValue);
  //   const isValueExist = adultsValueStringified !== defaultAdultsValueStringified;

  //   const allParams = [...params];
  //   const paramsWithoutAdults = allParams
  //     .filter(param => param[0] !== URL_QUERY_KEYS.Adults);

  //   if (isValueExist) {
  //     setParams([...paramsWithoutAdults, [URL_QUERY_KEYS.Adults, adultsValueStringified]]);
  //   } else {
  //     setParams(paramsWithoutAdults);
  //   }
  // }, [adultsValue]);

  // const minDate = new Date().toISOString().split("T")[0];
  // console.log(minDate);


  return (
    <div className={styles.filter}>
      <SearchFilter />
      <DateInFilter />
      <DateOutFilter />
      <AdultsFilter />
      <ChildrenFilter />
    </div>
  );
};