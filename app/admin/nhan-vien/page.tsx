"use client"
import { BrowserView, MobileView } from "react-device-detect";
import NhanVien from "./nhanVien";
import NhanVienMobile from "./nhanVienMobile";
export default function Page() {
  return (
    <div>
      <BrowserView>
        <NhanVien/>
      </BrowserView>
      <MobileView>
        <NhanVienMobile/>
      </MobileView>
    </div>
  );
}
