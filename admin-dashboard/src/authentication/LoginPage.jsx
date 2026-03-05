import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgImages from '../assets/bg-dashboard.jpg';

function LoginPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handlerSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    navigate('/dashboard');
    // navigate('/UserInformations')
  }

  return (
    <div className="min-h-screen flex relative">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImages})`}}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative w-full max-w-md mx-auto md:ml-auto md:mr-10 flex items-center justify-center p-6">
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Password:</label>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter Your Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-gray-500 mt-1"
              >
                {showPassword ? "Hide" : "Show"} Password
              </button>
            </div>
            <button 
              type="submit" 
              className="w-full bg-pink-500 text-white py-2 rounded-lg font-bold hover:bg-pink-600 transition"
            >
              Submit
            </button>
          </form>
          <p className="text-center text-gray-500 mt-6">
            Don't have an account? <Link to='/register' className="text-pink-500 font-semibold cursor-pointer hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;