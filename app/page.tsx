import ResonateHQ from "@/components/ResonateHQ";
import Directory from "@/components/Directory";
import Social from "@/components/Social";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col grid call-graph max-w-screen h-screen overflow-scroll">
      <Navbar />
      <ResonateHQ />
    </div>
  );
}
