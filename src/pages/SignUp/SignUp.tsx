import { FormEvent, useState } from "react";
import { useSignUpMutation } from "../../redux/features/auth/auth";
import { useNavigate, Link } from "react-router-dom";
import signUpImg from '../../assets/images/Mobile-login.jpg';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [signUp, { data, isError, isLoading }] = useSignUpMutation();

    // Handle successful signup
    if (data?.success === true) {
        navigate('/login');
    }

    const handleSignUp = (e: FormEvent) => {
        e.preventDefault();
        const signUpData = {
            name,
            email,
            password
        };
        signUp(signUpData);
        
    };

    return (
        <div className="bg-white relative">
            <div className="flex flex-col items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl lg:flex-row">
                <div className="flex flex-col items-center w-full lg:flex-row">
                    <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                        <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                            <img src={signUpImg} alt="Logo" className="w-full h-auto" />
                        </div>
                    </div>

                    <div className="w-full mt-10 lg:mt-0 lg:w-5/12">
                        <form onSubmit={handleSignUp}>
                            <div className="flex flex-col items-start justify-start p-8 bg-white shadow-2xl rounded-xl relative z-10">
                                <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Sign up</p>
                                <div className="w-full mt-6 space-y-6">
                                    <div className="relative">
                                        <p className="bg-white px-2 -mt-3 ml-2 font-medium text-gray-600 absolute">Username</p>
                                        <input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} type="text" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mt-2 text-base bg-white border-gray-300 rounded-md" />
                                    </div>
                                    <div className="relative">
                                        <p className="bg-white px-2 -mt-3 ml-2 font-medium text-gray-600 absolute">Email</p>
                                        <input placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mt-2 text-base bg-white border-gray-300 rounded-md" />
                                    </div>
                                    <div className="relative">
                                        <p className="bg-white px-2 -mt-3 ml-2 font-medium text-gray-600 absolute">Password</p>
                                        <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mt-2 text-base bg-white border-gray-300 rounded-md" />
                                    </div>
                                    <div className="relative">
                                        <button className="w-full py-4 text-xl font-medium text-center text-white  rounded-lg transition duration-200 bg-green-600 hover:bg-green-700 ease" disabled={isLoading}>
                                            {isLoading ? 'Signing Up...' : 'Submit'}
                                        </button>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="text-gray-600">Already have an account?</p>
                                        <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {isError && (
                            <p className="text-red-500 mt-4 text-center">Error occurred during sign up</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
