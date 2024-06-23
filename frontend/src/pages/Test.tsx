export const TestComponent = () => {
    return (
        <>
            <div className="flex min-h-[100dvh] flex-col">
            <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                <div>
                    <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign up for our blog</h1>
                    <p className="mt-2 text-center text-sm text-gray-600">
                    Get the latest updates and insights delivered to your inbox.
                    </p>
                </div>
                <form className="space-y-6" >
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <div className="mt-1">
                        <input
                        id="name"
                        required={true}
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                        type="text"
                        name="name"
                        />
                    </div>
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input
                        id="email"
                        required={true}
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                        type="email"
                        name="email"
                        />
                    </div>
                    </div>
                    <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input
                        id="password"
                        required={true}
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                        type="password"
                        name="password"
                        />
                    </div>
                    </div>
                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        Sign up
                    </button>
                    </div>
                </form>
                </div>
            </main>
            </div>
        </>
    )
}