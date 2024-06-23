import { Button } from "../components/Button"
import { InputField } from "../components/Input"

export const Singup = () => {
    return (
        <>
        <div className="w-full h-screen">
            <div className="w-full h-screen text-white py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-700 to-primary-foreground">
                <div className="container px-4 md:px-6 text-primary-foreground">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h1 className="text-4xl text-center font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Stay Informed, Inspired, and Connected
                    </h1>
                    <p className="text-lg text-center md:text-xl">
                    Sign up for our blog and get the latest insights, tips, and trends delivered straight to your inbox.
                    </p>
                    <div className=" flex justify-center ">
                        <div className="p-10 bg-white rounded-xl m-8 ">
                            <h1 className=" text-center font-semibold text-3xl text-black">Sign Up</h1>
                            <form className="md:w-96">
                                <InputField type="email"
                                    placeholder="johndoe@gmail.com">
                                    Email
                                </InputField>
                                <InputField type="password" 
                                    placeholder=" ********** "> 
                                    Password
                                </InputField>
                                <InputField type="text"
                                    placeholder="John Doe">
                                    Name
                                </InputField>
                                <Button>
                                    Sign Up 
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}