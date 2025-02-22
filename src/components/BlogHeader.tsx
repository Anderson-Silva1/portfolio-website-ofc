"use client";

import { FC } from "react";

interface BlogHeaderProps {
  onClick: () => void;
  textoBotao: string;
}

const BlogHeader: FC<BlogHeaderProps> = ({ onClick, textoBotao }) => {
  return (
    <div className="flex justify-between p-8">
      <span className="p-4 text-sm font-semibold text-white sm:text-sm md:text-2xl">
        Últimas postagens
      </span>
      <span
        className="transform cursor-pointer rounded-xl bg-blue-600 p-4 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:rotate-2 hover:scale-105 hover:bg-blue-700 hover:shadow-xl sm:text-sm md:text-2xl"
        onClick={onClick}
      >
        {textoBotao}
      </span>
    </div>
  );
};

export default BlogHeader;
