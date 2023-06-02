import {useSearchParams} from "react-router-dom";
import {Filter} from "src/component/filter/Filter";
import {URL_QUERY_KEYS} from "src/component/filter/FilterInput";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {getCurrentDate, getNextDate, getNewDateOut} from "src/utils/getDate";
import {Button} from "gf-ui-lib/src/components/Button/Button";
import {RoomServices} from "src/model/Room/RoomServices";
import styles from "src/component/filter/Filters.module.scss";

const MIN_ADULTS_VALUE = 0;
const MIN_CHILDREN_VALUE = 0;
export const defaultAdultsValue: number = MIN_ADULTS_VALUE;
export const defaultChildrenValue: number = MIN_CHILDREN_VALUE;
export const defaultServiceValue = [];
export const defaultDateValue = "";
export const MIN_DATE_IN = getCurrentDate;
export const MIN_DATE_OUT = getNextDate;

export const Filters = () => {
  const [params, setParams] = useSearchParams();
  const servicesArray = Object.values(RoomServices);
  const {
    dateInValue,
    setDateInValue,
    dateOutValue,
    setDateOutValue,
    adultsValue,
    setAdultsValue,
    childrenValue,
    setChildrenValue,
    setServiceValues,
  } = useFilterRooms();

  const setDefaultFilters = () => {
    setDateInValue(defaultDateValue);
    setDateOutValue(defaultDateValue);
    setAdultsValue(defaultAdultsValue);
    setChildrenValue(defaultChildrenValue);
    setServiceValues(defaultServiceValue);
    setParams();
  };

  const isChecked = (service: string) => {
    const paramValuesArray = params.getAll("Services");
    if (paramValuesArray.toString().includes(service)) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <div className={styles.filters}>
        <div className={styles.filtersRaw}>
          <Filter
            paramValue={dateInValue}
            defaultParamValue={MIN_DATE_IN}
            urlQueryKey={URL_QUERY_KEYS.DateIn}
            inputName={URL_QUERY_KEYS.DateIn}
            inputType="date"
            min={MIN_DATE_IN}
            styles={styles.input}
            styleLabel={styles.label}
            text={URL_QUERY_KEYS.DateIn}
          />
          <Filter
            paramValue={dateOutValue}
            defaultParamValue={MIN_DATE_OUT}
            urlQueryKey={URL_QUERY_KEYS.DateOut}
            inputName={URL_QUERY_KEYS.DateOut}
            inputType="date"
            min={getNewDateOut(dateInValue)}
            styles={styles.input}
            styleLabel={styles.label}
            text={URL_QUERY_KEYS.DateOut}
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
            text={URL_QUERY_KEYS.Adults}
          />
          <Filter
            paramValue={childrenValue}
            defaultParamValue={defaultChildrenValue}
            urlQueryKey={URL_QUERY_KEYS.Children}
            inputName={URL_QUERY_KEYS.Children}
            inputType="number"
            min={MIN_CHILDREN_VALUE}
            styles={styles.input}
            styleLabel={styles.label}
            text={URL_QUERY_KEYS.Children}
          />
        </div>
        <div className={styles.servicesWrap}>
          <div className={styles.title}>
            {URL_QUERY_KEYS.Services}
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