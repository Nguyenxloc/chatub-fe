
"use client"
import { Navbarx } from "./(dashboard)/component/navbarx";
import { Sliderx } from "./(dashboard)/component/sliderx";
import { Sidebarx } from "./(dashboard)/component/sidebarx";
import { Footerx } from "./(dashboard)/component/footer";
import Products from "./products/products";
export default function Page() {
  return (
    <div>
      <h2>this is the home page</h2>
      <Navbarx />
      <Sliderx/>
      <div className="flex">
        <div className="w-3/12 mt-5">
          <Sidebarx />
        </div>
        <div className="w-full bg-white">
            <div className="ms-5 mt-5">
            <Products/>
            </div>
        </div>
      </div>
      <Footerx />
    </div>
  );
}
