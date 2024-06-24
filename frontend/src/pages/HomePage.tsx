import { HeaderComponent } from "../components/Header"
import { HomePageComponent } from "../components/HomePage"


export const HomePage = () => {
    return (
        <>
            <div className="flex flex-col min-h-[100dvh]">
                <HeaderComponent />
                <HomePageComponent />
            </div>
        </>
    )
}