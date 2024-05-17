"use client"
import { NextPage } from "next";
import { Navbarx } from "../navbarx";
import { Sidebarx } from "../sidebarx";
import { Slider } from "../slider";
export const HomePage: NextPage = function(){
    return(
        <div>
        <Navbarx/>
        <Slider />
        <div>
          <Sidebarx/>
        </div>
      </div>  
    );
}