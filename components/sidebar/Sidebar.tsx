"use client";

import { FC, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import {
  AiOutlinePieChart,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { HiHomeModern, HiOutlineChartBar } from "react-icons/hi2";
import { MdPersonOutline } from "react-icons/md";
import { BiAlbum, BiHeadphone } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { RiSettings3Line, RiLogoutCircleRLine } from "react-icons/ri";

import SidebarItem from "./SidebarItem";
import Logo from "./Logo";
import Purchase from "./Purchase";
import { twMerge } from "tailwind-merge";
import Box from "../Box";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
        icon: HiHomeModern,
      },
      {
        label: "Artist",
        active: pathname === "/artist",
        href: "/artist",
        icon: MdPersonOutline,
      },
      {
        label: "Album",
        active: pathname === "/album",
        href: "/album",
        icon: BiAlbum,
      },
      {
        label: "Trending",
        active: pathname === "/trending",
        href: "/trending",
        icon: HiOutlineChartBar,
      },
      {
        label: "Recent",
        active: pathname === "/recent",
        href: "/recent",
        icon: AiOutlinePieChart,
      },
      {
        label: "Favourites",
        active: pathname === "/favourites",
        href: "/favourites",
        icon: BsHeart,
      },
      {
        label: "My Music",
        active: pathname === "/mymusic",
        href: "/my-music",
        icon: BiHeadphone,
      },
      {
        label: "Setting",
        active: pathname === "/setting",
        href: "/setting",
        icon: RiSettings3Line,
      },
      {
        label: "Logout",
        href: "",
        icon: RiLogoutCircleRLine,
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full ">
      <div
        className={twMerge(
          "hidden md:flex flex-col  bg-blue-600 h-full w-[240px] max-lg:w-[200px] text-white"
        )}
      >
        <Logo />
        <Box className="">
          <div className="flex flex-col px-5 py-4 gap-y-2">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="px-4">
          <Purchase />
        </Box>
      </div>

      <main className="flex-1 h-full py-2 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Sidebar;
