import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";

const trafficData = [
    { date: "Mon", visitors: 1200 },
    { date: "Tue", visitors: 1800 },
    { date: "Wed", visitors: 1500 },
    { date: "Thu", visitors: 1700 },
    { date: "Fri", visitors: 2000 },
    { date: "Sat", visitors: 2200 },
    { date: "Sun", visitors: 1900 },
];

export default function Analytics() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold mb-4">Analytics Dashboard</h1>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Visitors</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">15,200</p>
                        <p className="text-sm text-muted-foreground">This Week</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Page Views</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">45,000</p>
                        <p className="text-sm text-muted-foreground">This Week</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Bounce Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">37%</p>
                        <p className="text-sm text-muted-foreground">Site-wide</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Avg. Session</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">3m 45s</p>
                        <p className="text-sm text-muted-foreground">Engagement</p>
                    </CardContent>
                </Card>
            </div>

            {/* Visitors Chart */}
            <Card>
                <CardHeader>
                    <CardTitle>Visitors Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={trafficData}>
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Bar dataKey="visitors" fill="#3b82f6" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
}
