import { CardComponent } from "./Card"
import { FooterComponent } from "./HomeFooter"

export const HomePageComponent = () => {
    return (
        <>
        <div className=" text-black flex flex-col min-h-[100dvh]">
        <main className="flex-1 ">
            {/* Upper section */}
            <section className="bg-[#d7d8d8] py-12 md:py-20">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 ml-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">Read stories that matter</h1>
                    <p className="text-muted-foreground text-lg">Discover the best ideas, insights, and stories on Medium.</p>
                    {/* <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
                        Get Started
                    </button> */}
                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            className="flex w-32 justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                            Get Started
                        </button>
                    </div>
                </div>
                <img
                    src="/vite.svg"
                    width="600"
                    height="400"
                    alt="Hero"
                    className="rounded-xl object-cover"
                />
                </div>
            </div>
            </section>
            {/* Lower section */}
            <section className="py-12 md:py-20 mx-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <CardComponent ></CardComponent>
                <CardComponent ></CardComponent>
                <CardComponent ></CardComponent>
                <CardComponent ></CardComponent>
                <CardComponent ></CardComponent>
            </div>
            </section>
        </main>
        <FooterComponent />
        </div>
        </>
    )
}