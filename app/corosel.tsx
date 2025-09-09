// // import * as React from "react";

// // import { Card, CardContent, CardDescription } from "@/components/ui/card";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// // } from "@/components/ui/carousel";
// // import { string } from "zod";
// // import { FaStar } from "react-icons/fa";

// // export function CarouselSize() {
// //   let array = [
// //     {
// //       title: "Wicked",
// //       img: "https://i.ytimg.com/vi/pqi45Qhq3CI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAt_M72usdEDaH4wdRLrZDMIyUdeA",
// //     },
// //     {
// //       title: "Batman",
// //       img: "https://media.wired.com/photos/5932d503f682204f73697c96/master/pass/TDK_P3_1280.jpg",
// //     },
// //     {
// //       title: "Prisoner",
// //       img: "https://m.media-amazon.com/images/I/51ucp499mCL._SL500_.jpg",
// //     },
// //   ];

// //   return (
// //     <div>
// //       {" "}
// //       <Carousel
// //         opts={{
// //           align: "start",
// //         }}
// //         className="py-0 my-0"
// //       >
// //         <CarouselContent className="my-0 overflow-hidden relative">
// //           {array.map((_, index) => (
// //             <CarouselItem key={index}>
// //               <Card className="h-[600px] w-[1440px] overflow-hidden  ">
// //                 <img
// //                   src={array[index].img}
// //                   className="object-cover absolute h-[600px] w-[1440px] "
// //                 ></img>
// //                 <div className="flex flex-col absolute">
// //                   <CardDescription className="text-white absolute mt-[178px] ml-[140px] w-100">
// //                     Now Playing:
// //                   </CardDescription>
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
// //                   <button className="bg-white py-4 px-4 mt-[420px] ml-[140px] absolute">
// //                     Button
// //                   </button>
// //                 </div>
// //               </Card>
// //             </CarouselItem>
// //           ))}
// //         </CarouselContent>
// //         <CarouselPrevious />
// //         <CarouselNext />
// //       </Carousel>
// //     </div>
// //   );
// // }
// "use client";

// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export function CarouselPlugin() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   );

//   return (
//     <div>
//       {" "}
//       <Carousel
//         plugins={[plugin.current]}
//         className="w-full max-w-xs "
//         onMouseEnter={plugin.current.stop}
//         onMouseLeave={plugin.current.reset}
//       >
//         <CarouselContent>
//           {Array.from({ length: 3 }).map((_, index) => (
//             <CarouselItem key={index}>
//               <div>
//                 <Card>
//                   <CardContent className="flex aspect-square items-center justify-center p-6 h-[600px]  ">
//                     <span className="text-4xl font-semibold">{index + 1}</span>
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// }
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Carosel = () => {
  return (
    <div className="w-360">
      {" "}
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img src="cover1.jpg" className="w-360 relative"></img>
            <p className="text-white absolute">
              orjmgrigkdfbdkfmbdfgkmbkdfgbmkdfgbkmmkergm
            </p>
          </CarouselItem>
          <CarouselItem>
            {" "}
            <img src="cover1.jpg" className="w-360"></img>
          </CarouselItem>
          <CarouselItem>
            {" "}
            <img src="cover1.jpg" className="w-360"></img>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
