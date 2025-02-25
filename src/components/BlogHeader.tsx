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
      <span className="custom-hover-btn bg-blue-800" onClick={onClick}>
        {textoBotao}
      </span>
    </div>
  );
};

export default BlogHeader;
