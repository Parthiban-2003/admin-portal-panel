import React, { useState } from "react";
import Dashboard from "../dashboard/Dashboard"; 
import EmployeeInfo from "../pages/UserInformations";
import EmployeeDirectory from "../pages/UserDisplay";

function DashboardLayout() {
    const [activePage, setActivePage] = useState("home");

    const renderRightContent = () => {
        switch (activePage) {
            case "employee-info":
                return <EmployeeInfo />;
            case "employee-directory":
                return <EmployeeDirectory />;
            default:
                return <div className="p-6 text-2xl font-bold">Welcome to Dashboard</div>;
        }
    };

    return (
        <div className="flex min-h-screen">
            <Dashboard setActivePage={setActivePage} />  
            <div className="w-4/5 bg-gray-100">{renderRightContent()}</div> 
        </div>
    );
}

export default DashboardLayout;