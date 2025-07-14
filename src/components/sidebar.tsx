import { Home, BarChart2, Package, ShoppingCart, DollarSign, Users, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
    { label: "Dashboard", icon: Home, path: "/" },
    { label: "Analytics", icon: BarChart2, path: "/analytics" },
    { label: "Products", icon: Package, path: "/product" },
    { label: "Orders", icon: ShoppingCart, path: "/orders" },
    { label: "Sales", icon: DollarSign, path: "/sales" },
    { label: "Customer", icon: Users, path: "/customers" },
    { label: "Settings", icon: Settings, path: "/settings" },
];

export function Sidebar() {
    const location = useLocation();

    return (
        <aside className="w-64 h-screen bg-[#f0f4f8] border-r px-4 py-6">
            <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
            <nav className="space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const active = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium",
                                active
                                    ? "bg-green-100 text-green-600"
                                    : "text-gray-700 hover:bg-gray-100"
                            )}
                        >
                            <Icon size={18} />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}

