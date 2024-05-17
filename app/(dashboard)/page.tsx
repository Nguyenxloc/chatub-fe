
"use client"
import { Footerx } from "./component/footer";
import { Navbarx } from "./component/navbarx";
import { Sidebarx } from "./component/sidebarx";
import { Sliderx } from "./component/sliderx";
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
