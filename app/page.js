import Hero from "../components/sections/Hero";
import ServicesSnapshot from "../components/sections/ServicesSnapshot";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import FeaturedWork from "../components/sections/FeaturedWork";
import SocialProof from "../components/sections/SocialProof";
import MiniProcess from "../components/sections/MiniProcess";
import FinalCTA from "../components/sections/FinalCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSnapshot />
      <WhyChooseUs />
      <FeaturedWork />
      <SocialProof />
      <MiniProcess />
      <FinalCTA />
    </div>
  );
}
