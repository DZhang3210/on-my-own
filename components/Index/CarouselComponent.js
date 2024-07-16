
"use client";

import { Carousel } from "flowbite-react";
import CarouselCard from "./CarouselCard";
import CarouselButton from "./CarouselButton";

export default function Component() {
  const reviews = [
    ["review1", "Ocean's Bounty Seafood is a hidden gem for seafood lovers."],
    ["review2", "The seafood here is exceptionally fresh and expertly prepared. We started with the oysters, which were plump and flavorful,"],
    ["review3", "Ocean's Bounty Seafood is a must-visit for anyone who appreciates high-quality seafood. The combination of fresh ingredients, skilled preparation, and excellent service makes it a standout choice."],

  ]
  
  return (
    <div className="h-[30rem] w-full">
      <Carousel slideInterval={2000} 
        className="max-w-3xl mx-auto"
        leftControl= {<CarouselButton side = "left"/>}
        rightControl= {<CarouselButton side = "right"/>}
      >
        {reviews.map((review, i) => (
          <CarouselCard key = {i} rTitle = {review[0]} rDesc = {review[1]}/>
        ))}
    
      </Carousel>
    </div>
  );
}
