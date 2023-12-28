"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import postareDefault from "public/images/postareDefault.png";

export default function Posts() {
  const posts = [
    {
      src: postareDefault,
      href: "/posts/postare1",
    },
    {
      src: postareDefault,
      href: "/posts/postare1",
    },
    {
      src: postareDefault,
      href: "/posts/postare1",
    },
    {
      src: postareDefault,
      href: "/posts/postare1",
    },
    {
      src: postareDefault,
      href: "/posts/postare1",
    },
    {
      src: postareDefault,
      href: "/posts/postare1",
    },
    {
      src: postareDefault,
      href: "/posts/postare1",
    },
    {
      src: postareDefault,
      href: "/posts/postare1",
    },
    {
      src: postareDefault,
      href: "/posts/postare1",
    },
    {
      src: postareDefault,
      href: "/posts/postare1",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold">Postări</h2>

      <div className="my-10">
        <Swiper
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          pagination={{ clickable: true }}
        >
          {posts.map((post, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <Link href={post.href}>
                    <Image
                      src={post.src}
                      alt="posts"
                      width={300}
                      height={300}
                      className="sm:w-[inhredit] w-full"
                      priority
                    />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Link href="/posts">
        <h4 className="text-lg underline">Vezi mai multe postări &gt;</h4>
      </Link>
    </div>
  );
}
