import React from "react";

function Radio({ label, options, register, error }) {
  return (
    <div className="form-group mt-2">
      <label>{label}:</label>
      <div className="flex space-x-2">
        {options.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              {...register}
              value={option.value}
              id={`role${option.label}`}
            />
            <label htmlFor={`role${option.label}`} className="ml-2">
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
}

export default Radio;
