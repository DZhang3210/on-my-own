import { AnimatedPinDemo } from "@/components/AnimatedPin";
import Hero from "@/components/Index/Hero";
import Testimonials from "@/components/Index/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Testimonials/>
      <AnimatedPinDemo/>
    </div>
  );
}
