import React from "react";
import image from "../assets/bg.jpg";
export default function Home() {
  return (
    <main>
      <img
        src={image}
        className="absolute object-cover w-full h-full"
        alt="Background"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-4xl lg:text-8xl text-green-100 font-bold cursive leading-none lg:leading-snug lg:home-name">
          Welcome To Crooked Codes!
        </h1>
      </section>
    </main>
  );
}
