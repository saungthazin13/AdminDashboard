import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const orders = [
  {
    id: "ORD001",
    customer: "John Doe",
    date: "2025-07-12",
    total: 129.99,
    status: "Pending",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    date: "2025-07-11",
    total: 89.5,
    status: "Completed",
  },
  {
    id: "ORD003",
    customer: "Michael Lee",
    date: "2025-07-10",
    total: 45.0,
    status: "Cancelled",
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "Pending":
      return "bg-yellow-200 text-yellow-800";
    case "Completed":
      return "bg-green-200 text-green-800";
    case "Cancelled":
      return "bg-red-200 text-red-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
}

export default function Orders() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Orders</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{orders.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {orders.filter((o) => o.status === "Pending").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Order Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Order ID</th>
                <th className="text-left p-2">Customer</th>
                <th className="text-left p-2">Date</th>
                <th className="text-right p-2">Total</th>
                <th className="text-left p-2">Status</th>
                <th className="text-right p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.customer}</td>
                  <td className="p-2">{order.date}</td>
                  <td className="p-2 text-right">${order.total.toFixed(2)}</td>
                  <td className="p-2">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-2 text-right space-x-2">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                    <Button size="sm" variant="destructive">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
