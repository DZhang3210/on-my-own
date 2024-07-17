'use client'
import Image from 'next/image'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: {
    y:-30,
    opacity:0
  },
  animate: {
    x:0,
    opacity:100,
    transition: {
      delay:0,
      duration:0.5
    }
  }
}
const Hero = () => {
  return (
    <section className='w-full h-[100vh] relative flex justify-center text-center'>
        <div className="absolute left-0 top-0 h-full w-[5rem] bg-red-400/20 z-[-1]"/>
        <div className='z-10 mt-32 flex flex-col gap-3 w-[400px] max-w-sm px-4'>
            <motion.span
              variants = {fadeIn}
              initial = "initial"
              animate = "animate"
            >
              <span className='text-6xl font-bold text-blue-500'>Seafood Select</span> 
              <br/>
              <span className='text-3xl font-semibold text-blue-400'>Your next Stravaganza</span>
              <p className='text-xl text-blue-300'>We do delivery and appointments only</p>
            </motion.span>
            <motion.a 
              variants = {fadeIn}
              initial = "initial"
              animate = "animate"
              href = "/booking"
              className=' rounded-full bg-black text-white p-4 mt-6 w-full text-lg text-semibold'
            >
                Book your next appointment now
            </motion.a>
            <motion.div
              variants = {fadeIn}
              initial = "initial"
              animate = "animate"
            >
            <Accordion type="multiple" collapsible = "true" className='w-full max-w-full overflow-hidden text-blue-300 bg-gray-600/80 p-4'>
              <AccordionItem value="item-1">
                <AccordionTrigger className = "text-lg">When are we open?</AccordionTrigger>
                <AccordionContent>
                  <div>
                    We're open 24/7 7 days a week
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className = "text-lg text-start">How many people do we accomodate?</AccordionTrigger>
                <AccordionContent>
                  <div className='text-md'>
                    If given one month notice, we can accomodate up to 300 people, but on short notice about 90 people max
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className = "text-lg">What kind of events do we host?</AccordionTrigger>
                <AccordionContent>
                  <div className='text-md'>
                    All kinds of events! If you have heard of it, we accomdate it
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </motion.div>

        </div>

      <Image 
        src = {'/ocean-beach-horizon.jpg'} 
        alt= "hero-mesh" 
        layout='fill'
        height = {0} 
        width = {0} 
        className='absolute top-0 left-0 w-full h-full fade-gradient'
      />
    </section>
  )
}

export default Hero
