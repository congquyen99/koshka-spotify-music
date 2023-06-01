"use client";

import Link from "next/link";
import Search from "./Search";
import UserAvatar from "./UserAvatar";

import { HiHomeModern } from "react-icons/hi2";
import { MdOutlineSearch } from "react-icons/md";
import Button from "../Button";

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-2 md:gap-4">
      <Link href={"/"}>
        <HiHomeModern
          size={30}
          className="hidden max-md:block p-1 rounded-full text-white bg-blue-500"
        />
      </Link>
      <div className="space-y-1 hidden xl:block">
        <h1 className="text-2xl font-bold">Hi Stranger!</h1>
        <p className="text-gray-500 italic">
          What music would you like to hear today?
        </p>
      </div>
      <Search />
      <MdOutlineSearch
        size={30}
        className="hidden max-md:block p-1 rounded-full text-white bg-blue-500"
      />
      <div className="flex items-center gap-2">
        <div>
          <Button
            onClick={() => {}}
            className="bg-transparent/70 max-md:bg-blue-500/70"
            type="button"
            children={"Sign Up"}
          />
        </div>
        <div>
          <Button
            onClick={() => {}}
            className=""
            type="button"
            children={"Sign In"}
          />
        </div>
      </div>
      {/* <UserAvatar /> */}
    </div>
  );
};

export default Header;
