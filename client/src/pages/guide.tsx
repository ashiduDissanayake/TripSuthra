import GuideCard from "@/components/guide/guideCard";
import GuideReviews from "@/components/guide/guideReviews";
import GuideContact from "@/components/guide/guideContact";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function Guide() {
  return (
    <div>
      <div className="mb-4">
        <Navbar />
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-2/5 p-4 space-y-4">
          <div className="transform scale-85">
            <GuideCard />
          </div>
          <div className="transform scale-95">
            <GuideReviews />
          </div>
        </div>
        <div className="w-full md:w-3/5 p-2 flex justify-end items-start">
          <div className="transform scale-85">
            <GuideContact />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
}
