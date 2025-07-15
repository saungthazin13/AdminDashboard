export default function Discounts() {
  const discounts = [
    {
      id: 1,
      name: "Summer Sale",
      code: "SUMMER2025",
      percent: 20,
      startDate: "2025-07-01",
      endDate: "2025-07-31",
      status: "active",
    },
    {
      id: 2,
      name: "New Year Deal",
      code: "NY2025",
      percent: 15,
      startDate: "2025-01-01",
      endDate: "2025-01-15",
      status: "expired",
    },
    {
      id: 3,
      name: "Flash Offer",
      code: "FLASH10",
      percent: 10,
      startDate: "2025-07-10",
      endDate: "2025-07-12",
      status: "active",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Discounts</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Code
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Discount (%)
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Start Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                End Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {discounts.map((discount) => (
              <tr key={discount.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {discount.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <span className="bg-gray-200 px-2 py-1 rounded text-xs font-mono">
                    {discount.code}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {discount.percent}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {discount.startDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {discount.endDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      discount.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {discount.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
