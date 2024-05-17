
"use client"
import { Navbarx } from "./(dashboard)/component/navbarx";
import { Sliderx } from "./(dashboard)/component/sliderx";
import { Sidebarx } from "./(dashboard)/component/sidebarx";
import { Footerx } from "./(dashboard)/component/footer";
export default function Page() {
  return (
    <div>
      <Navbarx />
      <Sliderx />
      <div>
        <Sidebarx />
      </div>
      <Footerx/>
    </div>
  );
}
