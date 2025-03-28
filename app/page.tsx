import ResonateHQ from "@/components/ResonateHQ";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col call-graph overflow-scroll">
      <NavBar />
      <ResonateHQ />
      <Footer />
    </div>
  );
}
