import Link from "next/link";

import { PaginationDemo } from "@/components/home/Pagination";
import Popular from "@/components/home/Popular";
export default async function Popularpage() {
  return (
    <div>
      <Popular slice1={undefined} slice2={undefined}></Popular>
      <div className="mt-10">
        <PaginationDemo></PaginationDemo>
      </div>
    </div>
  );
}
