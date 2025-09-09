import React from "react";
import { ModeToggle } from "./Theme"
import { Genre } from "./Genre"
import { Input } from "@/components/ui/input"
 
export const Header = () => {
  return (
    <div className="w-[1440px] h-[60px] flex justify-between items-center ml-20 ">
      <div className="flex gap-2">
        <img className="w-[16px] h-[16px]" src="film.png" alt="" />
        <h2 className="text-base font-bold leading-4 text-indigo-700">
          Movie Z
        </h2>
      </div>
      <div className="flex gap-3">
        <Genre></Genre>
        <Input type="search" placeholder="Search.." className="w-[379px] h-[36px]" />
      </div>
<ModeToggle></ModeToggle>
    </div>
  );
};