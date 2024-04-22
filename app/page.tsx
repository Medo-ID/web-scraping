import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">Intelligent Buying Begins Now ...</p>
            <h1 className="head-text">
              Unlock the Potential of{" "}
              <span className="text-primary">PriceTracker</span>
            </h1>
            <p className="mt-6">
              Empowering, intuitive platform for comprehensive product and
              growth analytics, enabling enhanced conversion, engagement, and
              retention strategies.
            </p>
            {/* TODO: Searchbar Component */}
            <Searchbar />
          </div>
          {/* TODO: HeroCarousel */}
          <HeroCarousel />
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["Apple Iphone 15", "Book", "T-shirt", "MacBook Pro 16"].map(
            (product, index) => (
              <div key={index}>{product}</div>
            )
          )}
        </div>
      </section>
    </>
  );
}
