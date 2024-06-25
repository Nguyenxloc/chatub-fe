"use client";
import { BrowserView, MobileView } from "react-device-detect";
import DetailNV from "../detailNV";
import DetailNVMobile from "../detailNVMobile";
export default function Page() {
  return (
    <div>
      <BrowserView>
        <DetailNV/>
      </BrowserView>
      <MobileView>
        <DetailNVMobile/>
      </MobileView>
     </div>)}