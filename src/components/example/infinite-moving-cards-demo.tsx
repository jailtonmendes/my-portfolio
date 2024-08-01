"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote: "Ionic.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote: "Angular.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "Typescript.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote: "React.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote: "React Native.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  {
    quote: "Flutter.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  {
    quote: "PHP.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  {
    quote: "Node.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
