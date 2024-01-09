"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

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
      <Link href="/posts">
        <h2 className="text-4xl font-black hover:text-gray-500">Postări</h2>
      </Link>

      <div className="my-10">
        <Swiper
          modules={[Pagination, Autoplay]}
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
          loop={true}
          speed={700}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
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

      {/* <Link href="/posts">
        <h4 className="text-lg underline hover:text-gray-500">
          -&gt; Vezi mai multe postări
        </h4>
      </Link> */}
    </div>
  );
}
