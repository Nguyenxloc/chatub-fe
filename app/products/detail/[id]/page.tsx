"use client";
import { Footerx } from "@/app/(dashboard)/component/footer";
import { Navbarx } from "@/app/(dashboard)/component/navbarx";
import { Sidebarx } from "@/app/(dashboard)/component/sidebarx";
import DetailProduct from "../../detailProduct";
import { useParams } from "next/navigation";

export default function HomePage() {
  const params = useParams<{id:string}>();
  const data = Object.entries(params);
  console.log("id:"+params.id);
  return (
    <div className="w-full border">
      <h2>this is the detail product page</h2>
      <Navbarx />
      <div className="flex gap-4">
        <div className="w-3/12">
          <Sidebarx />
        </div>
        <div className="w-full bg-white">
            <DetailProduct id={params.id}/>
        </div>
      </div>
      <Footerx />
    </div>
  );
}
