import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Analytics from "@/pages/analytics";
import Product from "@/pages/product";
import Settings from "@/pages/settings";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/product" element={<Product />} />

            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
}