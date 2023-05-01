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
      const paramValueRaw = params.get(props.urlQueryKey);
      const paramValueNumber: number = paramValueRaw ? JSON.parse(paramValueRaw) : 0;
      const paramValueString: string = paramValueRaw ? paramValueRaw.slice(1, -1) : "";
      switch(props.urlQueryKey) {
        case "dateIn": {
          setDateInValue(paramValueString);
          break;
        }
        case "dateOut": {
          setDateOutValue(paramValueString);
          break;
        }
        case "adults": {
          setAdultsValue(paramValueNumber);
          break;
        }
        case "children": {
          setChildrenValue(paramValueNumber);
          break;
        }
        default: {
          setSearchValue(paramValueString);
        }
      }
    }
  };

  useEffect(() => {
    setInputValue();
  }, []);

  const onChangeInput = (event: React.ChangeEvent<InputType>) => {
    switch(props.urlQueryKey) {
      case "dateIn": {
        setDateInValue(event.target.value);
        break;
      }
      case "dateOut": {
        setDateOutValue(event.target.value);
        break;
      }
      case "adults": {
        setAdultsValue(Number(event.target.value));
        break;
      }
      case "children": {
        setChildrenValue(Number(event.target.value));
        break;
      }
      default: {
        setSearchValue(event.target.value);
      }
    }
  };

  const addQueryParams = (paramValue: number | string, defaultParamValue: number | string, urlQueryKey: string) => {
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