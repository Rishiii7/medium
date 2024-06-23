import { Button } from "../components/Button"
import { InputField } from "../components/Input"

export const SignInComponent = () => {
    return (
        <>

        <div className="flex items-center text-black justify-center min-h-[100dvh] bg-background">
            <div className="w-full max-w-[400px] p-6 space-y-6 bg-card rounded-xl shadow-lg">
                <div className="text-center">
                <h1 className="text-3xl font-bold">Sign in to your account</h1>
                
                </div>
                <form className="space-y-4">
                <InputField type="email"
                    placeholder="johndoe@gmail.com">
                        Email
                </InputField>
                <InputField type="password"
                    placeholder="*******">
                        Password
                </InputField>
                <Button>
                    Sign in
                </Button>
                
                <div className="flex justify-center">
                <p className="text-muted-foreground">
                    Don't have an account?{" "}
                    <a className="text-primary underline" href="#">
                        Sign up
                    </a>
                </p>
                </div>
                </form>
            </div>
        </div>
        
        </>
    )
}