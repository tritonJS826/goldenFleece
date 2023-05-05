import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {FilterInput, InputType, URL_QUERY_KEYS} from "src/component/filter/FilterInput";
import {getNewDateOut} from "src/utils/getDate";

/**
 * Filter props
 */
interface FilterProps {
  /**
   * Value of query param in the url path
   */
  paramValue: number | string,
  /**
   * Default value of filter's input
   */
  defaultParamValue: number | string,
  /**
   * Keys for query params in the url path
   */
  urlQueryKey: URL_QUERY_KEYS,
  /**
   * Filter title
   */
  inputName: string,
  /**
   * Minimum value
   */
  min?: number | string,
  /**
   * Input type
   */
  inputType: "number" | "text" | "date"
}

export const defaultNumberValue = 0;
export const defaultStringValue = "";

export const Filter = (props: FilterProps) => {
  const [params, setParams] = useSearchParams();
  const {setSearchValue, setDateInValue, setDateOutValue, setAdultsValue, setChildrenValue} = useFilterRooms();

  const setInputValue = () => {
    if (params.has(props.urlQueryKey)) {
      const paramValueRaw = params.get(props.urlQueryKey);
      const paramValueNumber: number = paramValueRaw ? JSON.parse(paramValueRaw) : defaultNumberValue;
      const paramValueString: string = paramValueRaw ? paramValueRaw.slice(1, -1) : defaultStringValue;
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
    const actualDateOut = getNewDateOut(event.target.value);

    switch(props.urlQueryKey) {
      case "dateIn": {
        setDateInValue(event.target.value);
        setDateOutValue(actualDateOut);
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

  const addQueryParams = (paramValue: number | string, defaultParamValue: number | string, urlQueryKey: URL_QUERY_KEYS) => {
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
      min={props.min}
      onChange={onChangeInput}
    />
  );
};