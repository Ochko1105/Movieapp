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
import { FaChevronRight } from "react-icons/fa";
 
import Link from "next/link";
import { FaStar } from "react-icons/fa";
export function NavigationMenuDemo() {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/docs">Documentation</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
 
export const Genre = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="border-1">
              Genre
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="pl-2"><div className="text-[24px] font-semibold">Genre</div>
              <div className="pb-5 pt-2 text-[16px]">See lists of movies by genre</div></div>
              
              <div className="flex flex-wrap w-[577px] h-[333px] items-center gap-2" >
                
                <NavigationMenuLink className="border border-black "  href="/genre"><div className="flex items-center"><span>Action </span><FaChevronRight color="#09090B" className="w-[4px] h-[8px]" /></div></NavigationMenuLink>

                <NavigationMenuLink className="border border-black"  href="/genre">Adventure</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Amimation</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Biography</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Comedy</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Crime</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">
                  Documentary
                </NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Drama</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Family</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Fantasy</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Film-Noir</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Game-Show</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">History</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Horror</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Music</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Mystery</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">News</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">
                  Reality-TV
                </NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Romance</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Sci-Fi</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Short</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Sport</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Talk-Show</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Thriller</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">War</NavigationMenuLink>
                <NavigationMenuLink className="border border-black"  href="/genre">Western</NavigationMenuLink>
                </div>
              
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};