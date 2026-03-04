import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
            <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md text-center">
                <h1 className="text-3xl font-bold mb-4">Welcome, {user?.email || "User"}!</h1>
                <p className="text-gray-600 mb-6">You have successfully logged in.</p>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Dashboard;