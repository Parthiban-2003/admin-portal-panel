import { useState } from "react";

function EmployeeDetails() {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    roles: [],
    department: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleRoleChange = (e) => {
    const role = e.target.value;
    setEmployee(prev => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter(item => item !== role)
        : [...prev.roles, role]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employee);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl flex flex-col justify-center h-full p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Employee Details</h1>

        <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-3">

          <input type="text" placeholder="Name" name="name" value={employee.name}
            onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input type="email" placeholder="Email" name="email" value={employee.email}
            onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input type="number" placeholder="Age" name="age" value={employee.age}
            onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="male"checked={employee.gender === "male"} onChange={handleChange}
                className="form-radio text-indigo-500"
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input type="radio"name="gender" value="female" checked={employee.gender === "female"} 
              onChange={handleChange} className="form-radio text-indigo-500"
              />
              Female
            </label>
          </div>

          <div className="flex gap-4 flex-wrap">
            <label className="flex items-center gap-2">
              <input type="checkbox" value="Frontend" checked={employee.roles.includes("Frontend")}
                onChange={handleRoleChange} className="form-checkbox text-indigo-500"
              />
              Frontend
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="Backend" checked={employee.roles.includes("Backend")}
                onChange={handleRoleChange} className="form-checkbox text-indigo-500"
              />
              Backend
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value="Database" checked={employee.roles.includes("Database")}
                onChange={handleRoleChange} className="form-checkbox text-indigo-500"
              />
              Database
            </label>
          </div>

          <select name="department" value={employee.department} onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="">Select Department</option>
            <option value="Engineering">Engineering</option>
            <option value="HR">HR</option>
            <option value="Marketing">Marketing</option>
          </select>

          <textarea name="address" value={employee.address}
            onChange={handleChange} rows="2" placeholder="Address"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-lg font-bold hover:from-purple-500 hover:to-indigo-500 transition"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default EmployeeDetails;