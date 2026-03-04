import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    function handlerSubmit(e) {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if(password.length <= 6) {
            alert('Password must be greater than 6 characters');
            return;
        }

        navigate('/');
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h1>

                <form onSubmit={handlerSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Name:</label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Password:</label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Confirm Password:</label>
                        <input
                            type="password"
                            placeholder="Confirm Your Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white py-2 rounded-lg font-bold hover:from-pink-500 hover:to-purple-500 transition"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-gray-500 mt-4">
                    Already have an account?{" "}
                    <Link to="/" className="text-purple-500 font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;