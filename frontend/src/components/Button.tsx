import React from "react";

const ButtonComponent = ({ children, onclickHandler }: { children: string, onclickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void }) => {
    return (
        <div className="mt-6">
            <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={onclickHandler}>
                {children}
            </button>
        </div>
    );
}

export const Button = React.memo(ButtonComponent);
