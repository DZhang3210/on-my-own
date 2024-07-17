import { AnimatedPinDemo } from "@/components/AnimatedPin";
import { AnimatedHero } from "@/components/componentLibrary/animatedHero";
import { InfiniteMovingCardsDemo } from "@/components/componentLibrary/movingCarousel";
import Hero from "@/components/Index/Hero";
import MakeAppointment from "@/components/Index/MakeAppointment";
import Testimonials from "@/components/Index/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <InfiniteMovingCardsDemo/> */}
      <Hero/>
      <Testimonials/>
      <MakeAppointment/>
    </div>
  );
}
