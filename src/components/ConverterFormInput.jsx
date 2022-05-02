const ConverterFormInput = ({ setValue, value }) => {
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="valueToConvert"
      type="number"
      placeholder="Wpisz kwotę"
      min="0"
      max="99999"></input>
  );
  return input;
};

export default ConverterFormInput;
