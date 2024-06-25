"use client"
import { BrowserView, MobileView } from "react-device-detect";
import GiaoHang from "./giaoHang";
import GiaoHangMobile from "./giaoHangMobile";
export default function Page() {
  return (
    <div>
      <BrowserView>
        <GiaoHang/>
      </BrowserView>
      <MobileView>
        <GiaoHangMobile/>
      </MobileView>
    </div>
  );
}
