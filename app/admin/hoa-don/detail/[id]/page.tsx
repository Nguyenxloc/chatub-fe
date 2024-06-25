"use client";
import { BrowserView, MobileView } from "react-device-detect";
import Detailhd from "../detailHD";
import DetailhdMobile from "../detailHDMobile";
export default function Page() {
  return (
    <div>
      <BrowserView>
        <Detailhd/>
      </BrowserView>
      <MobileView>
        <DetailhdMobile/>
      </MobileView>
     </div>)}