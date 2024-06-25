"use client"
import { BrowserView, MobileView } from "react-device-detect";
import KhachHang from "./khachHang";
import KhachHangMobile from "./khachHangMobile";
export default function Page() {
  return (
    <div>
      <BrowserView>
        <KhachHang/>
      </BrowserView>
      <MobileView>
        <KhachHangMobile/>
      </MobileView>
    </div>
  );
}
