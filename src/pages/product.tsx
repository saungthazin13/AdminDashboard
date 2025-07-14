import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 59.99,
        stock: 12,
        category: "Electronics",
    },
    {
        id: 2,
        name: "T-Shirt",
        price: 19.99,
        stock: 34,
        category: "Apparel",
    },
    {
        id: 3,
        name: "Notebook",
        price: 5.99,
        stock: 50,
        category: "Stationery",
    },
];

export default function Product() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold">Products</h1>

            {/* Product Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">{products.length}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Total Stock</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">
                            {products.reduce((sum, p) => sum + p.stock, 0)}
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Average Price</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">
                            $
                            {(
                                products.reduce((sum, p) => sum + p.price, 0) /
                                products.length
                            ).toFixed(2)}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Product Table */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Product List</CardTitle>
                    <Button>Add Product</Button>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left p-2">Name</th>
                                <th className="text-left p-2">Category</th>
                                <th className="text-right p-2">Price</th>
                                <th className="text-right p-2">Stock</th>
                                <th className="text-right p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p) => (
                                <tr key={p.id} className="border-b">
                                    <td className="p-2">{p.name}</td>
                                    <td className="p-2">{p.category}</td>
                                    <td className="p-2 text-right">${p.price.toFixed(2)}</td>
                                    <td className="p-2 text-right">{p.stock}</td>
                                    <td className="p-2 text-right space-x-2">
                                        <Button size="sm" variant="outline">
                                            Edit
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
