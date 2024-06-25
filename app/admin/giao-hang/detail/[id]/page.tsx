"use client";
import { BrowserView, MobileView } from "react-device-detect";
import Detailgh from "../detailGH";
import DetailghMobile from "../detailGHMobile";
export default function Page() {
  return (
    <div>
      <BrowserView>
        <Detailgh/>
      </BrowserView>
      <MobileView>
        <DetailghMobile/>
      </MobileView>
     </div>)}