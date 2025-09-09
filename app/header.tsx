"use client";

import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import { ModeToggle } from "./theme";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import * as React from "react";
import { NavigationMenuDemo } from "@/app/nav";

export const Header = () => {
  return (
    <div className="w-[1440px] flex justify-between items-center text-center">
      {" "}
      <div className="flex">
        <img src={"logo.svg"} className="h-5 w-5"></img>
        <p className="text-[16px] text-[#4338CA]">Movie Z</p>
      </div>
      <div className="flex">
        <div>
          {" "}
          <ul>
            {" "}
            <NavigationMenuDemo></NavigationMenuDemo>
          </ul>
        </div>

        <div className="flex gap-2 border rounded-md pl-2 w-[355px]">
          <img src={"searchbar.svg"}></img>
          <input type="search" placeholder="Search ..." />
        </div>
      </div>
      <div>
        {" "}
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};
