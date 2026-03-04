import { useDispatch, useSelector } from "react-redux";
import { deleteusers } from "../slices/UserSlices";
import { useNavigate } from "react-router-dom";

function UserDisplay() {
    const dispatch = useDispatch();
    const selector = useSelector(item => item.dashboard.users);
    const navigate = useNavigate();

    return (
        <div className="p-8 bg-purple-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
                User Information Display
            </h1>

            <div className="mb-6 text-center">
                <button
                    onClick={() => navigate('/UserInformations')}
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                >
                    Add Users
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-purple-300 rounded-lg shadow-sm">
                    <thead className="bg-purple-400 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Age</th>
                            <th className="py-3 px-4 text-left">Gender</th>
                            <th className="py-3 px-4 text-left">Roles</th>
                            <th className="py-3 px-4 text-left">Department</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {selector.map((item, index) => (
                            <tr
                                key={item.id}
                                className={`${
                                    index % 2 === 0 ? "bg-white" : "bg-purple-50"
                                } hover:bg-purple-200 transition-colors`}
                            >
                                <td className="py-2 px-4">{item.name}</td>
                                <td className="py-2 px-4">{item.email}</td>
                                <td className="py-2 px-4">{item.age}</td>
                                <td className="py-2 px-4">{item.gender}</td>
                                <td className="py-2 px-4">{item.roles.join(", ")}</td>
                                <td className="py-2 px-4">{item.department}</td>
                                <td className="py-2 px-4 space-x-2">
                                    <button
                                        onClick={() => navigate(`/UserInformations/${item.id}`)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => dispatch(deleteusers(item.id))}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserDisplay;