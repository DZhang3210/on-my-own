
"use client";

import { Carousel } from "flowbite-react";
import CarouselCard from "./CarouselCard";
import CarouselButton from "./CarouselButton";

export default function Component() {
  const reviews = [
    ["review1", "Ocean's Bounty Seafood is a hidden gem for seafood lovers. From the moment you step inside, you're greeted with a warm and inviting atmosphere. The decor is coastal chic, with nautical accents that make you feel like you're dining by the sea."],
    ["review2", "The seafood here is exceptionally fresh and expertly prepared. We started with the oysters, which were plump and flavorful, served with a zesty mignonette sauce. The clam chowder was rich and creamy, with a generous amount of clams. For the main course, we tried the grilled salmon and the seafood paella. The salmon was perfectly cooked, with a crispy skin and moist interior, accompanied by a delightful lemon-dill sauce. The seafood paella was a feast for the senses, packed with mussels, shrimp, and calamari, and seasoned to perfection."],
    ["review3", "Ocean's Bounty Seafood is a must-visit for anyone who appreciates high-quality seafood. The combination of fresh ingredients, skilled preparation, and excellent service makes it a standout choice. Whether you're celebrating a special occasion or simply craving some good seafood, this place is sure to impress."],

  ]
  
  return (
    <div className="h-[30rem]">
      <Carousel slideInterval={2000} 
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
