import {Filter} from "src/component/filter/Filter";
import {URL_QUERY_KEYS} from "src/component/filter/FilterInput";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {getCurrentDate, getNextDate} from "src/utils/getDate";
import styles from "src/component/filter/Filters.module.scss";

const MIN_ADULTS_VALUE = 1;
const MIN_CHILDREN_VALUE = 0;
export const defaultAdultsValue: number = MIN_ADULTS_VALUE;
export const defaultChildrenValue: number = MIN_CHILDREN_VALUE;
export const defaultSearchValue = "";
export const MIN_DATE_IN = getCurrentDate;
export const MIN_DATE_OUT = getNextDate;

export const Filters = () => {
  const {filter} = useDictionary().dictionary;
  const {searchValue, dateInValue, dateOutValue, adultsValue, childrenValue} = useFilterRooms();

  return (
    <div className={styles.filters}>
      <Filter
        paramValue={searchValue}
        defaultParamValue={defaultSearchValue}
        urlQueryKey={URL_QUERY_KEYS.Search}
        inputName={filter.search}
        inputType="text"
      />
      <Filter
        paramValue={dateInValue}
        defaultParamValue={MIN_DATE_IN}
        urlQueryKey={URL_QUERY_KEYS.DateIn}
        inputName={filter.dateIn}
        inputType="date"
        min={MIN_DATE_IN}
      />
      <Filter
        paramValue={dateOutValue}
        defaultParamValue={MIN_DATE_OUT}
        urlQueryKey={URL_QUERY_KEYS.DateOut}
        inputName={filter.dateOut}
        inputType="date"
        min={dateOutValue}
      />
      <Filter
        paramValue={adultsValue}
        defaultParamValue={defaultAdultsValue}
        urlQueryKey={URL_QUERY_KEYS.Adults}
        inputName={filter.adultsAmount}
        inputType="number"
        min={MIN_ADULTS_VALUE}
      />
      <Filter
        paramValue={childrenValue}
        defaultParamValue={defaultChildrenValue}
        urlQueryKey={URL_QUERY_KEYS.Children}
        inputName={filter.childrenAmount}
        inputType="number"
        min={MIN_CHILDREN_VALUE}
      />
    </div>
  );
};
