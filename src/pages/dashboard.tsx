// src/pages/dashboard.tsx
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DollarSign,
    ShoppingBag,
    Users,
    TrendingUp,
    Flame,
} from "lucide-react";
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";

const salesData = [
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
    { name: "Mar", revenue: 2000 },
    { name: "Apr", revenue: 2780 },
    { name: "May", revenue: 1890 },
];

const topProducts = [
    { name: "Product A", sales: 320 },
    { name: "Product B", sales: 275 },
    { name: "Product C", sales: 240 },
];

export default function Dashboard() {
    return (
        <div className="px-6 py-6 space-y-6">
            {/* Top Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Total Revenue</CardTitle>
                        <DollarSign className="text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">$82,650</p>
                        <p className="text-sm text-muted-foreground">Last 30 days</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Total Orders</CardTitle>
                        <ShoppingBag className="text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">1,645</p>
                        <p className="text-sm text-muted-foreground">Last 30 days</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Total Customers</CardTitle>
                        <Users className="text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">1,462</p>
                        <p className="text-sm text-muted-foreground">Last 30 days</p>
                    </CardContent>
                </Card>
            </div>

            {/* Sales Analytics */}
            <Card>
                <CardHeader>
                    <CardTitle>Sales Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={salesData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="revenue" fill="#34d399" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Sales Target */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Daily Target</CardTitle>
                        <TrendingUp className="text-orange-600" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-xl font-bold">$2,400 / $3,000</p>
                        <p className="text-sm text-muted-foreground">80% Achieved</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Monthly Target</CardTitle>
                        <Flame className="text-red-600" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-xl font-bold">$52,000 / $60,000</p>
                        <p className="text-sm text-muted-foreground">86% Achieved</p>
                    </CardContent>
                </Card>
            </div>

            {/* Top Selling Products */}
            <Card>
                <CardHeader>
                    <CardTitle>Top Selling Products</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {topProducts.map((product, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center border-b pb-2 last:border-0"
                        >
                            <span>{product.name}</span>
                            <span className="text-sm font-semibold text-gray-600">
                                {product.sales} sales
                            </span>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
