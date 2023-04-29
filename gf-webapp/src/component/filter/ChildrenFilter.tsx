import {useEffect} from "react";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {useSearchParams} from "react-router-dom";
import {FilterInput, URL_QUERY_KEYS, InputType} from "./FilterInput";


export const ChildrenFilter = () => {
  const {bookingRoomForm} = useDictionary().dictionary;
  const [params, setParams] = useSearchParams();
  const {childrenValue, setChildrenValue} = useFilterRooms();

  useEffect(() => {
    if (params.has(URL_QUERY_KEYS.Children)) {
      const childrenValueRaw = params.get(URL_QUERY_KEYS.Children) as string;
      const childrenValueNumber: number = JSON.parse(childrenValueRaw);
      setChildrenValue(childrenValueNumber);
    }
  }, []);

  const onChangeInput = (event: React.ChangeEvent<InputType>) => {
    setChildrenValue(Number(event.target.value));
  };

  const minChildrenValue = 0;
  const defaultChildrenValue: number = minChildrenValue;

  useEffect(() => {
    const childrenValueStringified = JSON.stringify(childrenValue);
    const defaultChildrenValueStringified = JSON.stringify(defaultChildrenValue);
    const isValueExist = childrenValueStringified !== defaultChildrenValueStringified;

    const allParams = [...params];
    const paramsWithoutChildren = allParams
      .filter(param => param[0] !== URL_QUERY_KEYS.Children);

    if (isValueExist) {
      setParams([...paramsWithoutChildren, [URL_QUERY_KEYS.Children, childrenValueStringified]]);
    } else {
      setParams(paramsWithoutChildren);
    }
  }, [childrenValue]);

  return (
    <FilterInput
      type="number"
      name={bookingRoomForm.childrenAmount}
      value={childrenValue}
      onChange={onChangeInput}
    />
  );
};