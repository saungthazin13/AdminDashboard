import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Analytics from "@/pages/analytics";
import Product from "@/pages/product";
import Sales from "@/pages/sales";
import Orders from "@/pages/orders";
import Users from "@/pages/users";
import Discounts from "@/pages/discounts";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/product" element={<Product />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/users" element={<Users />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/discounts" element={<Discounts />} />
    </Routes>
  );
}
