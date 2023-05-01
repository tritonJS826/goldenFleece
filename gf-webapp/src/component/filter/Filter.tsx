import {useEffect} from "react";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {useSearchParams} from "react-router-dom";
import {FilterInput, InputType} from "./FilterInput";

interface FilterProps {
  paramValue: number | string,
  defaultParamValue: number | string,
  urlQueryKey: string,
  inputName: string,
  inputType: "number" | "text" | "date"
}

export const Filter = (props: FilterProps) => {
  const [params, setParams] = useSearchParams();
  const {setSearchValue, setDateInValue, setDateOutValue, setAdultsValue, setChildrenValue} = useFilterRooms();

  const setInputValue = () => {
    if (params.has(props.urlQueryKey)) {
      const paramValueRaw = params.get(props.urlQueryKey) as string;
      const paramValueNumber: number = JSON.parse(paramValueRaw);

      if (params.has(props.urlQueryKey)) {
        setSearchValue(paramValueRaw);
      } else if (props.urlQueryKey === "dateIn") {
        setDateInValue(paramValueRaw);
      } else if (props.urlQueryKey === "dateOut") {
        setDateOutValue(paramValueRaw);
      } else if (props.urlQueryKey === "adults") {
        setAdultsValue(paramValueNumber);
      } else if (props.urlQueryKey === "children") {
        setChildrenValue(paramValueNumber);
      }
    }
  };

  useEffect(() => {
    setInputValue();
  }, []);

  const onChangeInput = (event: React.ChangeEvent<InputType>) => {
    if (props.urlQueryKey === "search") {
      setSearchValue(event.target.value);
    } else if (props.urlQueryKey === "dateIn") {
      setDateInValue(event.target.value);
    } else if (props.urlQueryKey === "dateOut") {
      setDateOutValue(event.target.value);
    } else if (props.urlQueryKey === "adults") {
      setAdultsValue(Number(event.target.value));
    } else if (props.urlQueryKey === "children") {
      setChildrenValue(Number(event.target.value));
    }
  };

  const addQueryParams = (paramValue: number | string, defaultParamValue: number | string, urlQueryKey: string) => {
    if (typeof paramValue === "string") {
      const isValueExist = paramValue !== "";

      const allParams = [...params];
      const paramsWithoutCurrentParam = allParams
        .filter(param => param[0] !== props.urlQueryKey);

      if (isValueExist) {
        setParams([...paramsWithoutCurrentParam, [props.urlQueryKey, paramValue]]);
      } else {
        setParams(paramsWithoutCurrentParam);
      }
    } else if (typeof paramValue === "number") {
      const paramValueStringified = JSON.stringify(paramValue);
      const defaultParamValueStringified = JSON.stringify(defaultParamValue);
      const isValueExist = paramValueStringified !== defaultParamValueStringified;

      const allParams = [...params];
      const paramsWithoutCurrentParam = allParams
        .filter(param => param[0] !== urlQueryKey);

      if (isValueExist) {
        setParams([...paramsWithoutCurrentParam, [urlQueryKey, paramValueStringified]]);
      } else {
        setParams(paramsWithoutCurrentParam);
      }
    }
  };

  useEffect(() => {
    addQueryParams(props.paramValue, props.defaultParamValue, props.urlQueryKey);
  }, [props.paramValue]);

  return (
    <FilterInput
      type={props.inputType}
      name={props.inputName}
      value={props.paramValue}
      onChange={onChangeInput}
    />
  );
};