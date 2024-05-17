"use client";

import { Footerx } from "@/app/(dashboard)/component/footer";
import { Navbarx } from "@/app/(dashboard)/component/navbarx";
import { Sidebarx } from "@/app/(dashboard)/component/sidebarx";
import { Sliderx } from "@/app/(dashboard)/component/sliderx";
import CellProduct from "./cellProduct";

export default function HomePage() {
  const data = [
    {
      name: "Dây da apple watch",
      price: "840,000 VNĐ",
      code: "APL-01",
      description: "#",
      url: "https://www.o2leather.com/cdn/shop/files/0T0A0311.jpg?v=1694762071",
    },
    {
      name: "Dây da apple watch",
      price: "840,000 VNĐ",
      code: "APL-02",
      description: "#",
      url: "https://www.o2leather.com/cdn/shop/files/0T0A0311.jpg?v=1694762071",
    },
    {
      name: "Dây da apple watch",
      price: "840,000 VNĐ",
      code: "APL-03",
      description: "#",
      url: "https://www.o2leather.com/cdn/shop/files/0T0A0311.jpg?v=1694762071",
    },
    {
      name: "Dây da apple watch",
      price: "840,000 VNĐ",
      code: "APL-04",
      description: "#",
      url: "https://www.o2leather.com/cdn/shop/files/0T0A0311.jpg?v=1694762071",
    },
    {
      name: "Dây da apple watch",
      price: "840,000 VNĐ",
      code: "APL-05",
      description: "#",
      url: "https://www.o2leather.com/cdn/shop/files/0T0A0311.jpg?v=1694762071",
    },
    {
      name: "Dây da apple watch",
      price: "840,000 VNĐ",
      code: "APL-06",
      description: "#",
      url: "https://www.o2leather.com/cdn/shop/files/0T0A0311.jpg?v=1694762071",
    },
  ];
  return (
    <div>
      <h2>this is the detail product page</h2>
      <Navbarx />
      <Sliderx />
      <div className="flex gap-4">
        <div className="w-3/12">
          <Sidebarx />
        </div>
        <div className="w-full bg-white">
          <div className="flex flex-wrap">
            {data.map((product, i) => (
              <div className="w-4/12">
                <CellProduct productCell={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footerx />
    </div>
  );
}
