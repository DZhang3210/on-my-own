import { AnimatedPinDemo } from "@/components/AnimatedPin";
import Hero from "@/components/Index/Hero";
import MakeAppointment from "@/components/Index/MakeAppointment";
import Testimonials from "@/components/Index/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Testimonials/>
      <MakeAppointment/>
    </div>
  );
}
