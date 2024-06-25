"use client";
import { BrowserView, MobileView } from "react-device-detect";
import DetailSP from "../detailSP";
import DetailSPMobile from "../detailSPMobile";
export default function Page() {
  return (
    <div>
      <BrowserView>
        <DetailSP/>
      </BrowserView>
      <MobileView>
        <DetailSPMobile/>
      </MobileView>
     </div>)}