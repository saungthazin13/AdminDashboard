import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sales = [
  {
    id: "S-1001",
    customer: "Aye Aye Win",
    amount: 120.5,
    date: "2025-07-12",
    status: "completed",
  },
  {
    id: "S-1002",
    customer: "Mya Mya",
    amount: 85.0,
    date: "2025-07-10",
    status: "pending",
  },
  {
    id: "S-1003",
    customer: "Ko Zaw",
    amount: 210.75,
    date: "2025-07-08",
    status: "cancelled",
  },
];

export default function Sales() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Sales Records</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sales.map((sale) => (
          <Card key={sale.id} className="border rounded-xl shadow-sm">
            <CardContent className="p-5 space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">#{sale.id}</h2>
                <Badge
                  variant={
                    sale.status === "completed"
                      ? "success"
                      : sale.status === "pending"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {sale.status}
                </Badge>
              </div>

              <div className="text-gray-600">
                <p>
                  <strong>Customer:</strong> {sale.customer}
                </p>
                <p>
                  <strong>Amount:</strong> ${sale.amount.toFixed(2)}
                </p>
                <p>
                  <strong>Date:</strong> {sale.date}
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
