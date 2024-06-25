"use client"
import { BrowserView, MobileView } from "react-device-detect";
import HoaDon from "./hoaDon";
import HoaDonMobile from "./hoaDonMobile";
export default function Page() {
  return (
    <div>
      <BrowserView>
        <HoaDon/>
      </BrowserView>
      <MobileView>
        <HoaDonMobile/>
      </MobileView>
    </div>
  );
}
