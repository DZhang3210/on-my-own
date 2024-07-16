"use client";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { Calendar } from "@/components/ui/calendar"

export function AnimatedPinDemo() {
  const [date, setDate] = useState(new Date())
  return (
      <PinContainer
        title="Schedule your next extraordinary outing"
        href="/booking"
      >
        {/* <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div> */}
         <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border text-white bg-blue-300"
        />
      </PinContainer>
  );
}