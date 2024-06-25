import { useNavigate } from "react-router-dom"

import { InputField } from "../components/Input"
import { useCallback, useState } from "react"
import axios from "axios"
import { Button} from "../components/Button"

type SigninInputType = {
    username : string;
    password : string;
}

export const SignInComponent = () => {

    const [signinUser, setSigninUser] = useState<SigninInputType>({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const signinButtonHandler =  useCallback( async () => {
            console.log('button clicked');
            // API call to signin
            try {
                const response = await axios.post('http://localhost:8787/api/v1/user/signin', {
                    username: signinUser.username,
                    password: signinUser.password
                });
    
                console.log('API response status:', response.status);
                console.log('API response data:', response.data);

                if (response.status === 200) {
                    console.log('Navigation triggered');
                    navigate('/blog');
                } else {
                    console.error('Unexpected response status:', response.status);
                }
            } catch (err) {
                console.error('Error during API call:', err);
                alert("Error while logging In !! \n Try Once again");
            }
            console.log("hi there in signin button");
    }, [signinUser]);

    return (
        <>

        <div className="flex items-center text-black justify-center min-h-[100dvh] bg-background">
            <div className="w-full max-w-[400px] p-6 space-y-6 bg-card rounded-xl shadow-lg">
                <div className="text-center">
                <h1 className="text-3xl font-bold">Sign in to your account</h1>
                
                </div>
                <form className="space-y-4">
                <InputField type="email"
                    placeholder="johndoe@gmail.com"
                    onchangeHandler={ (e : React.FormEvent<HTMLInputElement>) => {
                        setSigninUser({
                            ...signinUser,
                            username : e.currentTarget.value
                        });
                    } }>
                        Email
                </InputField>
                <InputField type="password"
                    placeholder="*******"
                    onchangeHandler={(e : React.FormEvent<HTMLInputElement>) => {
                        setSigninUser({
                            ...signinUser,
                            password : e.currentTarget.value
                        })
                    }}>
                        Password
                </InputField>
                <Button
                    onclickHandler={signinButtonHandler}>
                    Sign in
                </Button>
                
                <div className="flex justify-center">
                <p className="text-muted-foreground">
                    Don't have an account?{" "}
                    <a className="text-primary underline hover:cursor-pointer" onClick={() => navigate('/signup')}>
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