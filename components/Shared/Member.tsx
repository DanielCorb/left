import React from "react";
import { MemberProps } from "@/utils/types";
import Image from "next/image";

export default function Member({ member }: { member: MemberProps }) {
  return (
    <div className="flex sm:flex-row flex-col items-start gap-4">
      <div className="flex items-center gap-4 sm:w-1/4 w-full">
        <Image
          width={600}
          height={600}
          src={member.image}
          alt={member.name}
          priority
          // className="sm:h-60 h-96"
          objectFit="contain"
        />
      </div>

      <div className="flex flex-col gap-2 sm:w-3/4 w-full">
        <h3 className="text-4xl font-black">{member.name}</h3>
        <p className="text-lg">{member.description}</p>
      </div>
    </div>
  );
}
