import Image from "next/image";
import { Moviecard } from "./moviecard";
import { Header } from "./header";

import { Carosel } from "./corosel";
import { string } from "zod";

export default function Home() {
  return (
    <div className="flex flex-col w-[1440px] ">
      {" "}
      <div>
        {" "}
        <Header></Header>
      </div>
      <div>
        <Carosel></Carosel>
      </div>
      <div className="flex   flex-wrap mt-10 ">
        <Moviecard Name="Dear Santa" Score={6.9} Image="movei1.jpg"></Moviecard>
        <Moviecard
          Name="How To Train Your Dragon Live Action"
          Score={6.9}
          Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__YGsK48hipflO1yRk6lXYXn5TDtVcCFs6Q&s"
        ></Moviecard>
      </div>{" "}
    </div>
  );
}
