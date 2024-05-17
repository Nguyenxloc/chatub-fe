"use client";
import { NextPage } from "next";
import { Navbarx } from "./component/navbarx";
import { Sidebarx } from "./component/sidebarx";
import { Slider } from "./component/sliderx";
export default function HomePage () {
  return (
    <div>
      <Navbarx />
      <Slider />
      <div>
        <Sidebarx />
      </div>
    </div>
  );
};
