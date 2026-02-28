import { forwardRef } from "react";

const Input = forwardRef(({ heading, placeholder }, ref) => {
  return (
    <div className="mb-4">
      <p className="text-sm font-medium mb-1">{heading}</p>
      <input
        ref={ref}
        className="w-full border rounded-md px-3 py-2 outline-none"
        placeholder={placeholder}
      />
    </div>
  );
});

export default Input;