import {createContext, useContext} from "react";

const STUB_FILTER_FUNCTION = () => undefined;
const STUB_SERVICE_VALUE = "";
const STUB_ADULTS_VALUE = 0;
const STUB_CHILDREN_VALUE = 0;
const STUB_DATE_IN_VALUE = "";
const STUB_DATE_OUT_VALUE = "";


export type FilterRooms = {
  dateInValue: string,
  setDateInValue: (dateInValue: string) => void,
  dateOutValue: string,
  setDateOutValue: (dateOutValue: string) => void,
  adultsValue: number,
  setAdultsValue: (adultsValue: number) => void,
  childrenValue: number,
  setChildrenValue: (childrenValue: number) => void,
  serviceValues: string[],
  setServiceValues: (array: string[]) => void,
}


export const FilterRoomsContext: React.Context<FilterRooms> = createContext<FilterRooms>({
  dateInValue: STUB_DATE_IN_VALUE,
  setDateInValue: STUB_FILTER_FUNCTION,
  dateOutValue: STUB_DATE_OUT_VALUE,
  setDateOutValue: STUB_FILTER_FUNCTION,
  adultsValue: STUB_ADULTS_VALUE,
  setAdultsValue: STUB_FILTER_FUNCTION,
  childrenValue: STUB_CHILDREN_VALUE,
  setChildrenValue: STUB_FILTER_FUNCTION,
  serviceValues: [STUB_SERVICE_VALUE],
  setServiceValues: STUB_FILTER_FUNCTION,
});

export const useFilterRooms = () => useContext(FilterRoomsContext);