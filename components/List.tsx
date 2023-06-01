"use client";

import { FC } from "react";

interface ListProps {
  title: string;
}

const List: FC<ListProps> = ({ title }) => {
  return (
    <div className="mt-4 mb-7 px-4 shadow-lg rounded-lg bg-white">
      <div className="flex items-center justify-between">
        <h1 className="text-lg text-black mb-4 max-lg:text-base">{title}</h1>
      </div>
    </div>
  );
};

export default List;
