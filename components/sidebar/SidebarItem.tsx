"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex flex-row h-auto items-center w-full gap-x-2 text-md font-medium cursor-pointer rounded-md hover:text-white hover:bg-white/10 text-white/75 transition duration-300 p-2 hover:shadow-sm",
        active && "text-white font-bold bg-white/10 shadow-md"
      )}
    >
      <Icon size={26} />
      <p className={twMerge("w-full max-lg: text-sm truncate")}>{label}</p>
    </Link>
  );
};

export default SidebarItem;
