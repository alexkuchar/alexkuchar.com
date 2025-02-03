import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ButtonWithArrow = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link} className="group flex items-center -space-x-4">
      <span className="px-8 py-4 rounded-full bg-white transition-all">
        {text}
      </span>
      <span className="h-4 w-12 rounded-full bg-white" aria-hidden />
      <div className="px-4 py-4 bg-white rounded-full group-hover:rotate-45 group-hover:scale-95 transition-transform">
        <ArrowUpRight className="size-5" />
      </div>
    </Link>
  );
};

export default ButtonWithArrow;
