import { BackgroundGradient } from "./ui/DemoCard"

export const CardComponent = () => {
    return (
        <>
        <BackgroundGradient>
        <div className=" rounded-3xl border bg-slate-900 text-white text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex justify-center rounded-lg p-2">
                <img
                src="/vite.svg"
                width="400"
                height="225"
                alt="Article"
                className="rounded-lg object-fit h-48 w-48"
                />
            </div>
            
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-medium">The Joke Tax Chronicles: How a Lazy King Tried to Tax Laughter</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <span className="font-medium text-gray-600 dark:text-gray-300">RS</span>
                    </div>
                    <span>Acme Inc</span>
                    <span>·</span>
                    <span>5 min read</span>
                </div>
            </div>
        </div>
        </BackgroundGradient>
        
        </>
    )
}