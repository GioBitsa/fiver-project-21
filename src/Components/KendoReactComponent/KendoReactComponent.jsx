import React, { useCallback, useState } from "react";
import { MyKendoReact } from "./Style";
import { guid } from "@progress/kendo-react-common";
import {
  IntlProvider,
  LocalizationProvider,
  loadMessages,
} from "@progress/kendo-react-intl";
import { Scheduler, TimelineView } from "@progress/kendo-react-scheduler";
// import weekData from "cldr-core/supplemental/weekData.json";
// import currencyData from "cldr-core/supplemental/currencyData.json";
// import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
// import numbers from "cldr-numbers-full/main/es/numbers.json";
// import dateFields from "cldr-dates-full/main/es/dateFields.json";
// import currencies from "cldr-numbers-full/main/es/currencies.json";
// import caGregorian from "cldr-dates-full/main/es/ca-gregorian.json";
// import timeZoneNames from "cldr-dates-full/main/es/timeZoneNames.json";
import "@progress/kendo-date-math/tz/Etc/UTC";
import "@progress/kendo-date-math/tz/Europe/Sofia";
import "@progress/kendo-date-math/tz/Europe/Madrid";
import "@progress/kendo-date-math/tz/Asia/Dubai";
import "@progress/kendo-date-math/tz/Asia/Tokyo";
import "@progress/kendo-date-math/tz/America/New_York";
import "@progress/kendo-date-math/tz/America/Los_Angeles";
import esMessages from "./es.json";
import {
  sampleDataWithCustomSchema,
  displayDate,
  customModelFields,
} from "./events-utc";
// load(
//   likelySubtags,
//   currencyData,
//   weekData,
//   numbers,
//   currencies,
//   caGregorian,
//   dateFields,
//   timeZoneNames
// );
loadMessages(esMessages, "es-ES");

const KendoReactComponent = () => {
  const locales = [
    {
      language: "en-US",
      locale: "en",
    },
    {
      language: "es-ES",
      locale: "es",
    },
  ];
  const [date, setDate] = useState(displayDate);
  const [locale, setLocale] = useState(locales[0]);
  const [data, setData] = useState(sampleDataWithCustomSchema);
  const handleDateChange = useCallback(
    (event) => {
      setDate(event.value);
      setLocale(locale);
    },
    [setDate, locale]
  );
  const handleDataChange = useCallback(
    ({ created, updated, deleted }) => {
      setData((old) =>
        old
          .filter(
            (item) =>
              deleted.find((current) => current.TaskID === item.TaskID) ===
              undefined
          )
          .map(
            (item) =>
              updated.find((current) => current.TaskID === item.TaskID) || item
          )
          .concat(
            created.map((item) =>
              Object.assign({}, item, {
                TaskID: guid(),
              })
            )
          )
      );
    },
    [setData]
  );
  return (
    <MyKendoReact>
      <LocalizationProvider language={locale.language}>
        <IntlProvider locale={locale.locale}>
          <Scheduler
            data={data}
            onDataChange={handleDataChange}
            view={"timeline"}
            date={date}
            onDateChange={handleDateChange}
            editable={true}
            timezone={"Etc/UTC"}
            modelFields={customModelFields}
            group={{
              resources: ["Persons"],
              orientation: "vertical",
            }}
            resources={[
              {
                name: "Persons",
                data: [
                  {
                    text: "Peter",
                    value: 1,
                    color: "#5392E4",
                  },
                  {
                    text: "Alex",
                    value: 2,
                    color: "#54677B",
                  },
                ],
                field: "PersonIDs",
                valueField: "value",
                textField: "text",
                colorField: "color",
              },
            ]}
          >
            <TimelineView />
          </Scheduler>
        </IntlProvider>
      </LocalizationProvider>
    </MyKendoReact>
  );
};

export default KendoReactComponent;
