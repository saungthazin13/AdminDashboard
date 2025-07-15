import { useState } from "react";

const users = [
  {
    id: "U-1001",
    name: "Alice Moe",
    email: "alice@example.com",
    role: "Customer",
    status: "active",
    registered: "2025-07-01",
  },
  {
    id: "U-1002",
    name: "Admin Kyaw",
    email: "admin@shop.com",
    role: "Admin",
    status: "active",
    registered: "2025-06-20",
  },
  {
    id: "U-1003",
    name: "Ko Ko",
    email: "koko@live.com",
    role: "Customer",
    status: "banned",
    registered: "2025-07-10",
  },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded-md w-64"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add User
        </button>
      </div>

      <div className="overflow-x-auto rounded-md shadow border">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                ID
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                Name
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                Email
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                Role
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                Status
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                Registered
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-2">{user.registered}</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                  <button className="text-yellow-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
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
