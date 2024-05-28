// src/components/InputField.tsx

import React, { ChangeEvent } from "react";

interface InputFieldProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    icon: React.ReactNode;
    onFocus: () => void;
    inputRef: React.RefObject<HTMLInputElement>;
}

const InputField = ({
                        id,
                        label,
                        type,
                        placeholder,
                        value,
                        onChange,
                        error,
                        icon,
                        onFocus,
                        inputRef,
                    }: InputFieldProps) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="flex items-center rounded-md border border-gray-300 shadow-sm">
            {icon}
            <input
                id={id}
                type={type}
                className="w-full px-3 py-2 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                ref={inputRef}
                required
            />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
);

export default InputField;
