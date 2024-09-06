import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { useSelector } from "react-redux";
import ProtectedRoute from "./protectedRoute";
import PublicRoute from "./publicRoute";

export default function PublicLayout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <PublicRoute>
        <Navbar user={null} />
        <main className="w-full flex-grow pb-10">{children}</main>
        <Footer />
      </PublicRoute>
    </div>
  );
}
