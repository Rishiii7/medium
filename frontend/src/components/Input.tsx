// import { Input } from "@material-tailwind/react";
export const InputField = ({type, children, placeholder} : {type : string, children : string, placeholder : string}) => {
    return(
        <>
            <div className="mt-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {children}
                </label>
                <div className="mt-1">
                    <input
                    type={type}
                    id="name"
                    required={true}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                    placeholder={placeholder}
                    name="name"
                    />
                </div>
            </div>
        </>
    )
}