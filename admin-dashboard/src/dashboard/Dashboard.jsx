import React, { useState } from "react";
import { FaUsers, FaTasks, FaBuilding, FaChartBar, FaCog, FaCalendarCheck, FaBell, FaSignOutAlt, FaChevronDown, FaChevronUp, FaHome } from "react-icons/fa";

function Dashboard({ setActivePage }) {
    const [employeeOpen, setEmployeeOpen] = useState(false);
    const [departmentsOpen, setDepartmentsOpen] = useState(false);
    // const [projectsOpen, setProjectsOpen] = useState(false);
    const [tasksOpen, setTasksOpen] = useState(false);
    const [attendanceOpen, setAttendanceOpen] = useState(false);
    const [reportsOpen, setReportsOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [leaveOpen, setLeaveOpen] = useState(false);

    return (
        <div className="w-1/5 bg-gray-800 text-white min-h-screen p-6 flex flex-col">
            <div className="text-2xl font-bold mb-10">Webtechky</div>

            <button
                className="flex items-center px-4 py-2 rounded hover:bg-gray-700 mb-2"
                onClick={() => setActivePage("/dashboard")}
            >
                <FaHome className="mr-2" /> Dashboard
            </button>

            {/* Employees */}
            <div>
                <button
                    className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-700 mb-2"
                    onClick={() => setEmployeeOpen(!employeeOpen)}
                >
                    <span className="flex items-center">
                        <FaUsers className="mr-2" /> Employees
                    </span>
                    {employeeOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {employeeOpen && (
                    <div className="ml-6 flex flex-col">
                        <button
                            className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left"
                            onClick={() => setActivePage("employee-info")}
                        >
                            Employee Info
                        </button>
                        <button
                            className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left"
                            onClick={() => setActivePage("employee-directory")}
                        >
                            Employee Directory
                        </button>
                    </div>
                )}
            </div>

            {/* Departments */}
            <div>
                <button
                    className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-700 mb-2"
                    onClick={() => setDepartmentsOpen(!departmentsOpen)}
                >
                    <span className="flex items-center">
                        <FaBuilding className="mr-2" /> Departments
                    </span>
                    {departmentsOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {departmentsOpen && (
                    <div className="ml-6 flex flex-col">
                        <button className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left" onClick={() => setActivePage("department-form")}>Department Form</button>
                        <button className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left" onClick={() => setActivePage("department-directory")}>Department Directory</button>
                    </div>
                )}
            </div>

            {/* Tasks */}
            <div>
                <button
                    className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-700 mb-2"
                    onClick={() => setTasksOpen(!tasksOpen)}
                >
                    <span className="flex items-center">
                        <FaTasks className="mr-2" /> Tasks
                    </span>
                    {tasksOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {tasksOpen && (
                    <div className="ml-6 flex flex-col">
                        <button className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left" onClick={() => setActivePage("today-tasks")}>Today Tasks</button>
                        <button className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left" onClick={() => setActivePage("previous-tasks")}>Previous Tasks</button>
                    </div>
                )}
            </div>

            {/* Attendance */}
            <div>
                <button
                    className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-700 mb-2"
                    onClick={() => setAttendanceOpen(!attendanceOpen)}
                >
                    <span className="flex items-center">
                        <FaCalendarCheck className="mr-2" /> Attendance
                    </span>
                    {attendanceOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {attendanceOpen && (
                    <div className="ml-6 flex flex-col">
                        <button className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left" onClick={() => setActivePage("daily-attendance")}>Daily Attendance</button>
                        <button className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left" onClick={() => setActivePage("monthly-report")}>Monthly Report</button>
                    </div>
                )}
            </div>

            {/* Reports */}
            <div>
                <button
                    className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-700 mb-2"
                    onClick={() => setReportsOpen(!reportsOpen)}
                >
                    <span className="flex items-center">
                        <FaChartBar className="mr-2" /> Reports
                    </span>
                    {reportsOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {reportsOpen && (
                    <div className="ml-6 flex flex-col">
                        <button className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left" onClick={() => setActivePage("employee-performance")}>Employee Performance</button>
                        <button className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left" onClick={() => setActivePage("project-reports")}>Project Reports</button>
                    </div>
                )}
            </div>

            {/* Settings */}
            <div>
                <button
                    className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-700 mb-2"
                    onClick={() => setSettingsOpen(!settingsOpen)}
                >
                    <span className="flex items-center">
                        <FaCog className="mr-2" /> Settings
                    </span>
                    {settingsOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {settingsOpen && (
                    <div className="ml-6 flex flex-col">
                        <button className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left" onClick={() => setActivePage("profile-settings")}>Profile Settings</button>
                        <button className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left" onClick={() => setActivePage("account-preferences")}>Account Preferences</button>
                    </div>
                )}
            </div>

            {/* Leave Management */}
            <div>
                <button
                    className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-700 mb-2"
                    onClick={() => setLeaveOpen(!leaveOpen)}
                >
                    <span className="flex items-center">
                        <FaCalendarCheck className="mr-2" /> Leave
                    </span>
                    {leaveOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {leaveOpen && (
                    <div className="ml-6 flex flex-col">
                        <button className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left" onClick={() => setActivePage("leave-application")}>Apply Leave</button>
                        <button className="px-4 py-2 rounded hover:bg-gray-700 mb-1 text-left" onClick={() => setActivePage("leave-history")}>Leave History</button>
                    </div>
                )}
            </div>

            {/* Notifications */}
            <button className="flex items-center px-4 py-2 rounded hover:bg-gray-700 mb-2" onClick={() => setActivePage("notifications")}>
                <FaBell className="mr-2" /> Notifications
            </button>

            {/* Logout */}
            <button className="flex items-center px-4 py-2 rounded hover:bg-gray-700 mt-auto">
                <FaSignOutAlt className="mr-2" /> Logout
            </button>
        </div>
    );
}

export default Dashboard;