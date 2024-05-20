"use client";
import { Carousel } from "flowbite-react";
import { NextPage } from "next";

export default function Sliderx ({listIMG}) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="https://www.purina.co.uk/sites/default/files/2022-06/British%20Shorthair.1.jpg?h=adbf13f6&itok=qB4A9DeS" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="https://www.catster.com/wp-content/uploads/2023/11/Golden-british-shorthair-kitten-in-orange-background_OksanaSusoeva-Shutterstock.jpg" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="https://addictionpet.com/en-nz/wp-content/uploads/sites/5/2022/07/British-Shorthair-cat-facts.jpg" />
      </Carousel>
    </div>
  );
};
