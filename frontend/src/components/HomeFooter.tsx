export const FooterComponent = () => {
    return (
        <>
            <aside className="bg-[#FAFAFA] border-t px-4 md:px-6 py-8">
            <div className="container grid md:grid-cols-[1fr_300px] gap-8">
            <div className="space-y-8">
                <h2 className="text-2xl font-bold">Suggested Topics</h2>
                <div className="grid grid-cols-2  gap-4">
                <a href="#" className="bg-white rounded-md px-4 py-2 hover:bg-accent hover:text-accent-foreground">
                    Technology
                </a>
                <a href="#" className="bg-white rounded-md px-4 py-2 hover:bg-accent hover:text-accent-foreground">
                    Design
                </a>
                <a href="#" className="bg-white rounded-md px-4 py-2 hover:bg-accent hover:text-accent-foreground">
                    Entrepreneurship
                </a>
                <a href="#" className="bg-white rounded-md px-4 py-2 hover:bg-accent hover:text-accent-foreground">
                    Productivity
                </a>
                <a href="#" className="bg-white rounded-md px-4 py-2 hover:bg-accent hover:text-accent-foreground">
                    Creativity
                </a>
                <a href="#" className="bg-white rounded-md px-4 py-2 hover:bg-accent hover:text-accent-foreground">
                    Self-Improvement
                </a>
                </div>
            </div>
            <div className="space-y-8">
                <h2 className="text-2xl font-bold">Popular Writers</h2>
                <div className="grid grid-cols-2  gap-4">
                <PopularWriterComponent />
                <PopularWriterComponent />
                <PopularWriterComponent />
                <PopularWriterComponent />
                
                </div>
            </div>
            </div>
        </aside>
        </>
    );
}

const PopularWriterComponent = () => {
    return (
        <>
            <div>
                <a className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground p-4 rounded-md" href="#">
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600">
                        <span className="font-medium text-gray-600 dark:text-gray-300">RS</span>
                    </div>
                    <div className="space-y-1">
                    <h4 className="font-medium">Acme</h4>
                    </div>
                </a>
            </div>
        </>
    )
}