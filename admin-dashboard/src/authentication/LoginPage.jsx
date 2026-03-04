import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgImages from '../assets/bg-dashboard.jpg'

function LoginPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handlerSubmit(e) {
        e.preventDefault();
        navigate('/UserInformations');
    }

    return (
        <div className="min-h-screen flex relative">
            <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImages})`}}
            >
            </div>

            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="relative w-full md:w-1/3 ml-auto flex items-center justify-center p-10">
                <div className="bg-white rounded-2xl shadow-2xl p-10 w-full">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Login Page</h1>
                    
                    <form onSubmit={handlerSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                            <input 
                                type="text" 
                                placeholder="Enter Your Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                            <input 
                                type="email" 
                                placeholder="Enter Your Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Password:</label>
                            <input 
                                type="password" 
                                placeholder="Enter Your Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-pink-500 text-white py-2 rounded-lg font-bold hover:from-pink-500 hover:to-purple-500 transition"
                        >
                            Submit
                        </button>
                    </form>

                    <p className="text-center text-gray-500 mt-6">
                        Don't have an account? <Link to='/register'
                        className="text-pink-500 font-semibold cursor-pointer hover:underline">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;