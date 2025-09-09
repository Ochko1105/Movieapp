
import Image from "next/image";
import Movie from "@/components/home/Api";
import { Corosel } from "@/components/home/Corosel";

export default function Home() {
  return (
    <div className="w-[1440px] flex flex-col ">  
      <div className="ml-30"><Corosel></Corosel></div>
        <div className="ml-40 mt-10"><Movie></Movie></div>
      </div>

  )
}
