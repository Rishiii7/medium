import { useCallback, useState, } from 'react';
import  { Button }  from "../components/Button"
import { InputField } from "../components/Input"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export const Singup = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [name, setName] = useState<string>();

    const navigate = useNavigate();

    const onchangeUsernameHandler = useCallback( (e :React.FormEvent<HTMLInputElement> ) => {

        const usernameHandler = ( e : React.FormEvent<HTMLInputElement>) => {
            // console.log("Username button called");
            console.log(e.currentTarget.value);
            setUsername(e.currentTarget.value);
        };

        usernameHandler(e);

    }, [username]);

    const onchangePasswordHandler = useCallback( (e :React.FormEvent<HTMLInputElement> ) => {

        const PasswordHandler = ( e : React.FormEvent<HTMLInputElement>) => {
            // console.log("Username button called");
            console.log(e.currentTarget.value);
            setPassword(e.currentTarget.value);
        }

        PasswordHandler(e);

    }, [password]);

    const onchangeNameHandler = useCallback( (e :React.FormEvent<HTMLInputElement> ) => {

        const NameHandler = ( e : React.FormEvent<HTMLInputElement>) => {
            // console.log("Username button called");
            console.log(e.currentTarget.value);
            setName(e.currentTarget.value);
        }

        NameHandler(e);

    }, [name]);

    const buttonHandler = () => {
        console.log("Button clicked");

        // send request to backend
        // useEffect( () => {
            
        //     const postUserData = async () => {
        //         const response = await axios.post('http://localhost:8787/api/v1/user/signup', {
        //             username: username,
        //             password: password,
        //             name: name
        //         });

        //         console.log(response);
        //     };

        //     postUserData();

        // },  [username, 
        //     password,
        //     name]);

        const postUserData = async () => {
            try {
                const response = await axios.post('http://localhost:8787/api/v1/user/signup', {
                    username: username,
                    password: password,
                    name: name
                });


                console.log(response.data.token);
                navigate('/blog');
            } catch (err) {
                console.error(err);
            } 
            
        };

        postUserData();

        // navigate to home page
        
    }   

    return (
        <>
        <div className="w-full h-screen">
            <div className="w-full h-screen text-white py-10 md:py-24 lg:py-10 bg-gradient-to-r from-gray-700 to-primary-foreground">
                <div className="container text-black px-4 md:px-6 text-primary-foreground">
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
                                    placeholder="johndoe@gmail.com"
                                    onchangeHandler={onchangeUsernameHandler}>
                                    Email
                                </InputField>
                                <InputField type="password" 
                                    placeholder=" ********** "
                                    onchangeHandler={onchangePasswordHandler}> 
                                    Password
                                </InputField>
                                <InputField type="text"
                                    placeholder="John Doe"
                                    onchangeHandler={onchangeNameHandler}>
                                    Name
                                </InputField>
                                <Button
                                    onclickHandler={buttonHandler}>
                                    Sign Up 
                                </Button>
                            </form>
                            <div className="text-center mt-2 text-black text-sm text-muted-foreground">
                                Don't have an account?{" "}
                                <a className="underline hover:cursor-pointer" onClick={() => navigate('/signin')}>
                                    Sign In
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}