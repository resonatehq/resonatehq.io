import ResonateHQ from "@/components/ResonateHQ";
import Directory from "@/components/Directory";
import Social from "@/components/Social";

export default function Home() {
  return (
    <div className="flex flex-col grid call-graph max-w-screen h-screen overflow-hidden">
      <Directory />
      <ResonateHQ />
      <Social />
    </div>
  );
}
