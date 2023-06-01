"use client";
import Image from "next/image";
import useravatar from "@/assets/useravatar.png";
const UserAvatar = () => {
  return (
    <div className="rounded-full">
      <Image
        src={useravatar}
        width={50}
        height={50}
        alt="useravatar"
        className="max-md:w-8 max-md:h-8"
      />
    </div>
  );
};

export default UserAvatar;
