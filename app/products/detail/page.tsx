"use client";

import { Navbarx } from "@/app/(dashboard)/component/navbarx";
import { Sidebarx } from "@/app/(dashboard)/component/sidebarx";
import { Sliderx } from "@/app/(dashboard)/component/sliderx";

export default function HomePage () {
  return (
    <div>
      <Navbarx />
      <Sliderx />
      <div>
        <Sidebarx />
      </div>
    </div>
  );
};
