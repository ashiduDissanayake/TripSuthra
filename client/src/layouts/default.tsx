import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { useSelector } from "react-redux";
import ProtectedRoute from "./protectedRoute";

export default function DefaultLayout({ children }) {
  const { user } = useSelector((state) => state.user); // Access user from Redux

  return (
    <div className="relative flex flex-col min-h-screen">
      <ProtectedRoute>
        <Navbar user={user} />
        <main className="w-full flex-grow pb-10">{children}</main>
        <Footer />
      </ProtectedRoute>
    </div>
  );
}
