
import React from "react";

const CustomInput = ({ register, name, type, placeholder, error }) => (
  <div className="flex-1 flex flex-col">
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      className={`border rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-500
        ${error ? "border-red-500" : "border-purple-400"}`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default CustomInput;
