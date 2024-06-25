"use client";
import { BrowserView, MobileView } from "react-device-detect";
import DetailKH from "../detailKH";
import DetailKHMobile from "../detailKHMobile";
export default function Page() {
  return (
    <div>
      <BrowserView>
        <DetailKH/>
      </BrowserView>
      <MobileView>
        <DetailKHMobile/>
      </MobileView>
     </div>)}