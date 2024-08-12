"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[10rem] -mt-20 rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "Ionic.",
    icone: "💻",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote: "Angular.",
    icone: "💻",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "Typescript.",
    icone: "💻",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote: "React.",
    icone: "💻",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote: "React Native.",
    icone: "💻",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  {
    quote: "Flutter.",
    icone: "💻",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  {
    quote: "PHP.",
    icone: "💻",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  {
    quote: "Node.",
    icone: "💻",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
