export const Button = ({ children } : { children : string }) => {
    return (
        <>
            <div className="mt-6">
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    {children}
                </button>
            </div>
        
        </>
    );
}