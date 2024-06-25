import React from "react";

// import { Input } from "@material-tailwind/react";
export const InputFieldComponent = ({type, children, placeholder, onchangeHandler} : {type : string, children : string, placeholder : string, onchangeHandler : Function}) => {
    return(
        <>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                    {children}
                </label>
                <div className="mt-1">
                    <input
                    type={type}
                    required={true}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                    placeholder={placeholder}
                    onChange={(e : React.FormEvent<HTMLInputElement>) => onchangeHandler(e)}
                    />
                </div>
            </div>
        </>
    )
};

export const InputField = React.memo(InputFieldComponent);