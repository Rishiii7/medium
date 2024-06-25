export const HeaderComponent = () => {
    return (
        <>
        <header className="bg-white text-black border-b px-4 md:px-6 h-14 flex items-center justify-between">
            <a className="flex items-center gap-2" href="#" rel="ugc">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-black"
            >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 3v1"></path>
                <path d="M12 20v1"></path>
                <path d="M3 12h1"></path>
                <path d="M20 12h1"></path>
                <path d="m18.364 5.636-.707.707"></path>
                <path d="m6.343 17.657-.707.707"></path>
                <path d="m5.636 5.636.707.707"></path>
                <path d="m17.657 17.657.707.707"></path>
            </svg>
            <span className=" font-semibold">My Blog</span>
            </a>
        <nav className="flex items-center gap-4">
        <a className="text-sm font-medium hover:text-gray-600 transition-colors" href="#" rel="ugc">
            Home
        </a>
        <a className="text-sm font-medium hover:text-gray-600 transition-colors" href="#" rel="ugc">
            Trending
        </a>
        <a className="text-sm font-medium hover:text-gray-600 transition-colors" href="#" rel="ugc">
            Following
        </a>
        <a className="text-sm font-medium hover:text-gray-600 transition-colors" href="#" rel="ugc">
            Post
        </a>
        <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-gray-600"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
            </svg>
            </button>
            
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">RS</span>
            </div>

        </div>
        </nav>
        </header>
        </>
    )
}