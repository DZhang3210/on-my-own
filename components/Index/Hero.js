import Image from 'next/image'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='w-full h-[80vh] relative flex justify-center text-center'>
        <div className='z-10 mt-32 flex flex-col gap-3 w-[400px] max-w-sm px-4'>
            <span className='text-5xl'>Seafood Select</span> 
            <span className='text-3xl'>Your next Stravaganza</span>
            <p>We do delivery and appointments only</p>
            <Link 
              href = "/booking"
              className=' rounded-full bg-black text-white p-4 mt-6 w-full'
            >
                Book your next appointment now
            </Link>
            <Accordion type="multiple" collapsible = "true" className='w-full max-w-full overflow-hidden'>
              <AccordionItem value="item-1">
                <AccordionTrigger className = "text-lg">When are we open?</AccordionTrigger>
                <AccordionContent>
                  <div>
                    We're open 24/7 7 days a week
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className = "text-lg">How many people do we accomodate?</AccordionTrigger>
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

        </div>

      {/* <Image src = {'/mesh-gradient.png'} alt= "hero-mesh" height = {0} width = {0} className='absolute top-0 left-0 w-full h-full z-[-1]'/> */}
    </section>
  )
}

export default Hero
