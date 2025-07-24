import { useState } from "react";

import "@/styles/home.css";
import { ChevronsLeftRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { menubarData } from "@/constants/menu-data";
import Link from "next/link";

export default function Menubar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`menubar-position p-4 bg-white/50 ${
        isMenuOpen ? "w-80" : "w-[72px]"
      }`}
    >
      <span
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
        // todo: change the colors
        className="absolute top-12 -left-3 flex justify-center items-center rounded-full bg-[#dcdcdc] hover:bg-white transition-colors duration-300 h-6 aspect-square cursor-pointer"
      >
        <ChevronsLeftRight size={18} />
      </span>
      <TooltipProvider disableHoverableContent={true} delayDuration={500}>
        <div className="flex flex-col gap-2">
          {menubarData.map((group) => (
            <div key={group.label} className="flex flex-col gap-2">
              {/* todo: Change the colors */}
              <p
                className={`text-nowrap ${
                  isMenuOpen ? "" : "hidden"
                } font-semibold text-sm py-2 text-black/60`}
              >
                {group.label}
              </p>

              {group.items.map((item) =>
                isMenuOpen ? (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="flex items-center w-full p-2 gap-2 rounded-md hover:bg-white transition-colors duration-300"
                  >
                    {item.icon}
                    <span className="text-nowrap px-2">{item.title}</span>
                  </Link>
                ) : (
                  <Tooltip key={item.title}>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.url}
                        className="flex items-center w-full p-2 gap-2 rounded-md hover:bg-white transition-colors duration-300"
                      >
                        {item.icon}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="left">{item.title}</TooltipContent>
                  </Tooltip>
                )
              )}
            </div>
          ))}
        </div>
      </TooltipProvider>
    </nav>
  );
}
