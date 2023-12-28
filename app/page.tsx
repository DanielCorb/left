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
      <div className="my-10" />
      <Better />
      <div className="my-10" />
      <Posts />
      <div className="my-10" />
      <Analysis />
      <div className="my-10" />
      <Campaigns />
      <div className="my-10" />
      <Join />
      <div className="my-10" />
      <Contact />
      <div className="my-10" />
    </main>
  );
}
