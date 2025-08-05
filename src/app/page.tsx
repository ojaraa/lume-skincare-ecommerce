
import { About } from "@/components/about";
import HeroSection from "@/components/hero-section";
import Categories from "@/components/products/categories";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <HeroSection/>
      <Categories/>
      <About/>

    </main>
    
  );
}
