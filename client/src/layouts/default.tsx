import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full flex-grow pb-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
