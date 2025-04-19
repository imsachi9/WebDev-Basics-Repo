import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId();

  return (
    <div className={`flex ${className}`}>
      <div className="w-1/2 p-4">
        <label
          htmlFor={amountInputId}
          className="text-gray-600 text-sm font-medium block mb-2"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 text-gray-800 text-lg font-medium"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange &&
            onAmountChange(e.target.value ? Number(e.target.value) : 0)
          }
        />
      </div>
      <div className="w-1/2 p-4 bg-white">
        <label className="text-gray-600 text-sm font-medium block mb-2">
          Currency Type
        </label>
        <select
          className="w-full rounded-md px-2 py-1.5 bg-white border border-gray-300 text-gray-700 outline-none cursor-pointer hover:border-blue-500 focus:border-blue-500"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
