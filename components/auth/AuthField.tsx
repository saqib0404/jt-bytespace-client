import type { InputHTMLAttributes } from "react";

interface AuthFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function AuthField({ label, id, ...props }: AuthFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-3 block text-sm font-medium text-neutral-950"
      >
        {label}
      </label>

      <input
        id={id}
        className="
          h-14
          w-full
          rounded-xl
          border
          border-neutral-200
          bg-white
          px-5
          text-base
          text-neutral-950
          outline-none
          transition
          placeholder:text-neutral-400
          focus:border-primary-600
          focus:ring-2
          focus:ring-primary-100
        "
        {...props}
      />
    </div>
  );
}
