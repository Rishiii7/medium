import { HeaderComponent } from "../components/Header"
import { HomePageComponent } from "../components/HomePage"
import { FooterComponent } from "../components/HomeFooter"

export const HomePage = () => {
    return (
        <>
            <div className="flex flex-col min-h-[100dvh]">
                <HeaderComponent />
                <HomePageComponent />
                <FooterComponent />
            </div>
        </>
    )
}