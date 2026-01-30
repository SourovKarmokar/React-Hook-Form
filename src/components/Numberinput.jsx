import React from "react";

const NumberInput = ({ value, onChange, ...rest }) => {
  const handleChange = (e) => {
    const numberValue = e.target.valueAsNumber || 0;
    onChange(numberValue);
  };

  return (
    <div>
      <input
        type="number"
        min={0}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};

export default NumberInput;
