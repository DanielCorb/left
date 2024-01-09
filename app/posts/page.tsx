import React from "react";
import Image from "next/image";

export default function page() {
  const posts = [
    {
      title: "Postarea 1",
      description: "Descrierea postarii 1",
      image: "/images/postareDefault.png",
    },
    {
      title: "Postarea 1",
      description: "Descrierea postarii 1",
      image: "/images/postareDefault.png",
    },
    {
      title: "Postarea 1",
      description: "Descrierea postarii 1",
      image: "/images/postareDefault.png",
    },
    {
      title: "Postarea 1",
      description: "Descrierea postarii 1",
      image: "/images/postareDefault.png",
    },
    {
      title: "Postarea 1",
      description: "Descrierea postarii 1",
      image: "/images/postareDefault.png",
    },
    {
      title: "Postarea 1",
      description: "Descrierea postarii 1",
      image: "/images/postareDefault.png",
    },
    {
      title: "Postarea 1",
      description: "Descrierea postarii 1",
      image: "/images/postareDefault.png",
    },
    {
      title: "Postarea 1",
      description: "Descrierea postarii 1",
      image: "/images/postareDefault.png",
    },
  ];

  return (
    <main className="max-w-screen-xl mx-auto p-3">
      <h2 className="text-4xl font-black hover:text-gray-500 py-8">Postări</h2>

      <div className="sm:grid flex flex-col lg:grid-cols-4 md:grid-cols-3 w-full sm:grid-cols-2 gap-10 justify-items-center justify-between items-center mb-20">
        {posts.map((post) => (
          <Image
            src={post.image}
            width={300}
            height={300}
            className="w-full"
            alt={"posts"}
          />
        ))}
      </div>
    </main>
  );
}
