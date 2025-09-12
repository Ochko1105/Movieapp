import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import { Moviecard } from "./Moviecard";
import { Key } from "react";
import { getMoviesList } from "../../../utilis/get-data";
import { movieResponseType } from "../../../typs";

type Slicecount = {
  slice1: number | undefined;
  slice2: number | undefined;
};

export default async function Upcoming({ slice1, slice2 }: Slicecount) {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");

  return (
    <div>
      <div className="flex justify-between pl-30 pt-10">
        <div className="text-[24px] font-semibold">Upcoming</div>
        <Link href="/genre">
          {" "}
          <Button className="bg-white text-black ">
            See more{" "}
            <FaChevronRight color="black" className="w-[16px] h-[16px]" />
          </Button>
        </Link>
      </div>
      <div className="ml-40 mt-10">
        <div className="flex flex-wrap gap-4">
          {upcomingMovies.results
            .slice(slice1, slice2)
            .map(
              (movie: {
                id: Key | null | undefined;
                title: string;
                vote_average: number;
                poster_path: string;
              }) => (
                <Moviecard
                  key={movie.id}
                  title={movie.title}
                  Score={movie.vote_average}
                  Image={movie.poster_path}
                />
              )
            )}
        </div>{" "}
      </div>
    </div>
  );
}
