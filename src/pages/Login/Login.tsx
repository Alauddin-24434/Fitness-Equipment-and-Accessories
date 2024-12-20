import { FormEvent, useState, } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { useLoginMutation } from '../../redux/features/auth/auth';
import loginImg from '../../assets/images/6325227.jpg'
interface ERrorData {
  success: boolean;
  message: string;
  data: null;
}

interface ERror {
  status: number;
  data: ERrorData;
}

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [login, { isError, isLoading, error }] = useLoginMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await login(userData);
      // Assuming login mutation returns the user data or token upon success
      console.log('Login successful:', response);
      const token = response?.data?.data?.token; // Assuming you have the token as a string
     
      // Save user data to local storage
      localStorage.setItem('token', token);

      // Redirect logic based on the original intended path
      if (location.state && location.state.from) {
        navigate(location.state.from.pathname);
      } else {
        // Default redirect if no specific path is set (for first login attempt)
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
    }
  };







  return (
    <div className="bg-white relative ">
      <div className="flex flex-col items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl lg:flex-row">
        <div className="flex flex-col items-center w-full lg:flex-row">
          <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
            <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
              <img src={loginImg} alt="Login" className="w-full h-auto" />
            </div>
          </div>

          <div className="w-full mt-10 lg:mt-0 lg:w-5/12">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-start justify-start p-8 bg-white shadow-2xl rounded-xl relative z-10">
                <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Login</p>
                <div className="w-full mt-6 space-y-6">
                  <div className="relative">
                    <p className="bg-white px-2 -mt-3 ml-2 font-medium text-gray-600 absolute">Email</p>
                    <input
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mt-2 text-base bg-white border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="relative">
                    <p className="bg-white px-2 -mt-3 ml-2 font-medium text-gray-600 absolute">Password</p>
                    <input
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mt-2 text-base bg-white border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  {isError && (
                    <p className="text-red-500 mt-4 text-center">
                      {(error as ERror)?.data?.message || 'An error occurred'}
                    </p>
                  )}
                  <div className="relative">
                    <button
                      type="submit"
                      className="w-full py-4 text-xl font-medium text-center text-white bg-green-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                  </div>
                </div>
                {/* Add signup link */}
                <div className="mt-4 text-center">
                  <p className="text-gray-600">Don't have an account?</p>
                  <Link to="/signup" className="text-blue-500 hover:text-blue-700">Sign Up</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
