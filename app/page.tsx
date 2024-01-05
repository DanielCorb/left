import {
  Better,
  Analysis,
  Posts,
  Campaigns,
  Join,
  Contact,
} from "@/components/Home";

export default function Home() {
  return (
    <main className="flex flex-col max-w-screen-xl mx-auto items-center p-3">
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
      <Contact />
      <div className="my-6" />
    </main>
  );
}
