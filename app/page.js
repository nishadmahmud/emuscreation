import Hero from "../components/sections/Hero";
import ServicesSnapshot from "../components/sections/ServicesSnapshot";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import FeaturedWork from "../components/sections/FeaturedWork";
import SocialProof from "../components/sections/SocialProof";
import MiniProcess from "../components/sections/MiniProcess";
import FinalCTA from "../components/sections/FinalCTA";
import { generateMetadata } from "../lib/seo";
import { organizationSchema, websiteSchema } from "../lib/schema";

export const metadata = generateMetadata({
  title: "Professional Video Editing Services",
  description: "Transform your footage into cinematic masterpieces. Expert video editing for weddings, reels, YouTube, travel vlogs, and corporate content. Fast turnaround, worldwide service.",
  path: "/",
  keywords: [
    "best video editor",
    "hire video editor",
    "video editing online",
    "cinematic video editing",
    "affordable video editing",
  ],
});

export default function Home() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema]),
        }}
      />
      
      <div>
        <Hero />
        <ServicesSnapshot />
        <WhyChooseUs />
        <FeaturedWork />
        <SocialProof />
        <MiniProcess />
        <FinalCTA />
      </div>
    </>
  );
}
