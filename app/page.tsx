"use client";
import { Better, Analysis, Posts, Campaigns, Join } from "@/components/Home";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <main className="flex flex-col max-w-screen-xl mx-auto items-center p-3">
      <NextSeo
        title="LEFT"
        description="O inițiativă pentru consolidarea unei platforme civico-politice pentru însănătoșirea vieții sociale, politice și economice în perspectiva anului electoral 2024"
      />
      <div className="my-6" />
      <Better />
      <div className="my-6" />
      <Posts />
      <div className="my-6" />
      <Analysis />
      <div className="my-6" />
      <Campaigns />
      <div className="my-6" />
      <Join />
      <div className="my-6" />
    </main>
  );
}
