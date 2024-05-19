"use client";
import { Footerx } from "@/app/(dashboard)/component/footer";
import { Navbarx } from "@/app/(dashboard)/component/navbarx";
import { Sidebarx } from "@/app/(dashboard)/component/sidebarx";

export default function HomePage() {
  
  return (
    <div>
      <h2>this is the detail product page</h2>
      <Navbarx />
      <div className="flex gap-4">
        <div className="w-3/12">
          <Sidebarx />
        </div>
        <div className="w-full bg-white">
            product details
        </div>
      </div>
      <Footerx />
    </div>
  );
}
