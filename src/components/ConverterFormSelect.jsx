const ConverterFormSelect = ({ setOption, option }) => {
  const select = (
    <select
      className="currenciesToChoose"
      name="select"
      value={option}
      onChange={(e) => setOption(e.target.value)}>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="CHF">CHF</option>
    </select>
  );

  return select;
};

export default ConverterFormSelect;
