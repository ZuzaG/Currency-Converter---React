import ConverterFormInput from "./ConverterFormInput";
import ConverterFormSelect from "./ConverterFormSelect";
import ConverterFormButton from "./ConverterFormButton";
import ConverterFormInPLN from "./ConverterFormInPLN";
import { useState } from "react";

const ConverterForm = () => {
  // USESTATE
  const [value, setValue] = useState("");
  const [option, setOption] = useState("EUR");
  const [convertedPLN, setConvertedPLN] = useState("");

  // EVENT
  const convertToPLN = (e) => {
    e.preventDefault();
    fetch("https://api.nbp.pl/api/exchangerates/tables/A/?format=json")
      .then((response) => response.json())
      .then((data) => {
        const getCurrencyRateByName = (searchedCurrency) => {
          const rateObjectWithProperCode = data[0].rates.filter(
            (rate) => rate.code === searchedCurrency
          );
          const currencyRate = rateObjectWithProperCode[0].mid;
          return currencyRate;
        };
        const rateEUR = getCurrencyRateByName("EUR");
        const rateUSD = getCurrencyRateByName("USD");
        const rateCHF = getCurrencyRateByName("CHF");
        let input = Number(value);
        let tempRate = option;
        // VIEW
        if (tempRate === "EUR")
          setConvertedPLN((input * rateEUR).toFixed(2) + " PLN");
        if (tempRate === "USD")
          setConvertedPLN((input * rateUSD).toFixed(2) + " PLN");
        if (tempRate === "CHF")
          setConvertedPLN((input * rateCHF).toFixed(2) + " PLN");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="form" onSubmit={convertToPLN}>
      <ConverterFormInput setValue={setValue} value={value} />
      <ConverterFormSelect setOption={setOption} option={option} />
      <ConverterFormButton convertToPLN={convertToPLN} />
      <ConverterFormInPLN convertedPLN={convertedPLN} />
    </form>
  );
};

export default ConverterForm;
