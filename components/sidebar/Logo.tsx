"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center px-4 pt-3 text-white gap-x-2 max-lg:gap-1"
    >
      <Image src={logo} alt="logo" width={40} height={40} />
      <p className="text-2xl flex gap-1 max-lg:text-lg font-bold">
        Koshka <span>Spotify</span>
      </p>
    </Link>
  );
};

export default Logo;
