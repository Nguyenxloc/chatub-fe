"use client";
import { NextPage } from "next";
import { Navbarx } from "../(dashboard)/component/navbarx";
import { Sidebarx } from "../(dashboard)/component/sidebarx";
import { Sliderx } from "../(dashboard)/component/sliderx";
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
