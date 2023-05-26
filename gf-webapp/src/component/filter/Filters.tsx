import {useSearchParams} from "react-router-dom";
import {Filter} from "src/component/filter/Filter";
import {URL_QUERY_KEYS} from "src/component/filter/FilterInput";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {getCurrentDate, getNextDate, getNewDateOut} from "src/utils/getDate";
import {Button} from "gf-ui-lib/src/components/Button/Button";
import styles from "src/component/filter/Filters.module.scss";

const MIN_ADULTS_VALUE = 0;
const MIN_CHILDREN_VALUE = 0;
export const defaultAdultsValue: number = MIN_ADULTS_VALUE;
export const defaultChildrenValue: number = MIN_CHILDREN_VALUE;
export const defaultSearchValue = "";
export const defaultServiceValue = [];
export const MIN_DATE_IN = getCurrentDate;
export const MIN_DATE_OUT = getNextDate;
export const defaultDateValue = "";

export const Filters = () => {
  const [params, setParams] = useSearchParams();
  const {filter, roomInfo} = useDictionary().dictionary;
  const servicesArray = Object.values(roomInfo.services);
  const {
    searchValue,
    setSearchValue,
    dateInValue,
    setDateInValue,
    dateOutValue,
    setDateOutValue,
    adultsValue,
    setAdultsValue,
    childrenValue,
    setChildrenValue,
    serviceValues,
    setServiceValues,
  } = useFilterRooms();

  const setDefaultFilters = () => {
    setSearchValue(defaultSearchValue);
    setDateInValue(defaultDateValue);
    setDateOutValue(defaultDateValue);
    setAdultsValue(defaultAdultsValue);
    setChildrenValue(defaultChildrenValue);
    setServiceValues(defaultServiceValue);
    setParams();
  };

  const isChecked = (service: string) => {
    const paramArray = params.getAll("Services");
    const paramArr = paramArray.map((item => {
      return item.slice(1, -1);
    }));
    console.log(paramArr.includes(`${service}`));
    if (paramArr.includes(service)) {
      return true;
    }
    // if (params.has(service)) {
    //   return true;
    // }
    return false;
  };

  return (
    <div>
      <div className={styles.filters}>
        <div className={styles.filtersRaw}>
          <Filter
            paramValue={searchValue}
            defaultParamValue={defaultSearchValue}
            urlQueryKey={URL_QUERY_KEYS.Search}
            inputName={filter.search}
            inputType="text"
            styles={styles.input}
            styleLabel={styles.label}
            text={filter.search}
          />
          <Filter
            paramValue={dateInValue}
            defaultParamValue={MIN_DATE_IN}
            urlQueryKey={URL_QUERY_KEYS.DateIn}
            inputName={filter.dateIn}
            inputType="date"
            min={MIN_DATE_IN}
            styles={styles.input}
            styleLabel={styles.label}
            text={filter.dateIn}
          />
          <Filter
            paramValue={dateOutValue}
            defaultParamValue={MIN_DATE_OUT}
            urlQueryKey={URL_QUERY_KEYS.DateOut}
            inputName={filter.dateOut}
            inputType="date"
            min={getNewDateOut(dateInValue)}
            styles={styles.input}
            styleLabel={styles.label}
            text={filter.dateOut}
          />
          <Filter
            paramValue={adultsValue}
            defaultParamValue={defaultAdultsValue}
            urlQueryKey={URL_QUERY_KEYS.Adults}
            inputName={URL_QUERY_KEYS.Adults}
            inputType="number"
            min={MIN_ADULTS_VALUE}
            styles={styles.input}
            styleLabel={styles.label}
            text={filter.adultsAmount}
          />
          <Filter
            paramValue={childrenValue}
            defaultParamValue={defaultChildrenValue}
            urlQueryKey={URL_QUERY_KEYS.Children}
            inputName={filter.childrenAmount}
            inputType="number"
            min={MIN_CHILDREN_VALUE}
            styles={styles.input}
            styleLabel={styles.label}
            text={filter.childrenAmount}
          />
        </div>
        <div className={styles.servicesWrap}>
          <div className={styles.title}>
            {filter.services}
          </div>
          <div className={styles.services}>
            {servicesArray.map((service, i) => (
              <div
                className={styles.service}
                key={i}
              >
                <Filter
                  paramValue={service}
                  defaultParamValue={defaultServiceValue}
                  urlQueryKey={URL_QUERY_KEYS.Services}
                  inputType="checkbox"
                  // inputName={service}
                  inputName={URL_QUERY_KEYS.Services}
                  styles={styles.checkbox}
                  styleLabel={styles.labelNone}
                  textCheckbox={service}
                  isChecked={isChecked(service)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button
        value="Reset filters"
        onClick={setDefaultFilters}
      />
    </div>
  );
};
