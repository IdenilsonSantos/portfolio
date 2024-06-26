import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <HeroSection />
      </div>
    </main>
  );
}
