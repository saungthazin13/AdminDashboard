import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
import { AppRoutes } from "@/routes";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-auto bg-gray-50">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}

export default App
