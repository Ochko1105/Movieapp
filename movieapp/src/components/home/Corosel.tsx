import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FaStar } from "react-icons/fa"

import { Button } from "@/components/ui/button"
//  <CardDescription className="text-white absolute mt-[178px] ml-[140px] w-100">
// // //                     Now Playing:
// // //                   </CardDescription>
// //                   <p className="text-white absolute mt-[195px] ml-[140px]">
// //                     {array[index].title}
// //                   </p>
// //                   <p className="text-white flex gap-2 items-center mt-[215px] ml-[140px]">
// //                     <FaStar color="#FDE047"></FaStar> 6.9/10
// //                   </p>
// //                   <p className="text-white absolute h-[60px] w-[300px] mt-[245px] ml-[140px]">
// //                     Elphaba, a misunderstood young woman because of her green
// //                     skin, and Glinda, a popular girl, become friends at Shiz
// //                     University in the Land of Oz. After an encounter with the
// //                     Wonderful Wizard of Oz, their friendship reaches a
// //                     crossroads.{" "}
// //                   </p>
export const Corosel=()=>{
    return   <Carousel>
        <CarouselContent >
          <CarouselItem>
            <div className="w-[1440px] h-[600px] bg-[url(https://billboardphilippines.com/wp-content/uploads/2024/10/wicked-movie-ftr-img.jpg)] bg-no-repeat bg-cover bg-center text-white">    
            <div className="pt-[178px] pl-[140px]">
        
            <p>Now Playing :</p>
            <p className="text-[36px] font-bold">Wicked</p>
            <p className="flex gap-2 items-center text-[18px] pt-[10px]"><FaStar className="h-[28px] w-[28px]" color="#FDE047"/>6.9<span className="text-[16px] color-[#71717A]">/10</span></p>
            <p className="w-[500px] text-[12px] font-normal pt-[26px]"> Elphaba, a misunderstood young woman because of her green
                    skin, and Glinda, a popular girl, become friends at Shiz
                    University in the Land of Oz. After an encounter with the
                     Wonderful Wizard of Oz, their friendship reaches a
                    crossroads.</p>
                    <Button className="bg-white text-black mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33301 2L12.6663 8L3.33301 14V2Z" stroke="#18181B" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> Watch Trailer</Button>
                    </div>
            </div>
     
           
          </CarouselItem>
          <CarouselItem>
            {" "}
             <div className="text-white w-[1440px] h-[600px] bg-[url(https://assets.murphysmultiverse.com/uploads/2022/02/knight.jpg)] bg-no-repeat bg-cover bg-center">    
    <div className="pt-[178px] pl-[140px]">
        
            <p>Now Playing :</p>
            <p className="text-[36px] font-bold">Batman arkham city</p>
            <p className="flex gap-2 items-center"><FaStar color="#FDE047"/>8/10</p>
            <p className="w-[500px] text-[12px] font-normal pt-[26px]"> Elphaba, a misunderstood young woman because of her green
                    skin, and Glinda, a popular girl, become friends at Shiz
                    University in the Land of Oz. After an encounter with the
                     Wonderful Wizard of Oz, their friendship reaches a
                    crossroads.</p>
                    <Button className="bg-white text-black mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33301 2L12.6663 8L3.33301 14V2Z" stroke="#18181B" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> Watch Trailer</Button>
                    </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            {" "}
    <div className="text-white w-[1440px] h-[600px] bg-[url(https://wallpapers.com/images/hd/demon-slayer-anime-to-the-swordsmith-village-05crqo0e0fzkql5q.jpg)] bg-no-repeat bg-cover bg-center">    
    <div className="pt-[178px] pl-[140px]">
        
            <p>Now Playing :</p>
            <p className="text-[36px] font-bold">Demon Slayer</p>
            <p className="flex gap-2 items-center"><FaStar color="#FDE047"/>8.3/10</p>
            <p className="w-[500px] text-[12px] font-normal pt-[26px]"> Elphaba, a misunderstood young woman because of her green
                    skin, and Glinda, a popular girl, become friends at Shiz
                    University in the Land of Oz. After an encounter with the
                     Wonderful Wizard of Oz, their friendship reaches a
                    crossroads.</p>
                    <Button className="bg-white text-black mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33301 2L12.6663 8L3.33301 14V2Z" stroke="#18181B" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> Watch Trailer</Button>
                    </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-[20px]" />
        <CarouselNext className="right-[40px]" />
      </Carousel>
}