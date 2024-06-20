
import { BrowserView, MobileView } from "react-device-detect";
import SanPham from "./sanPham";
import SanPhamMobile from "./sanPhamMobile";
export default function Page() {
  return (
    <div>
      <BrowserView>
        <SanPham/>
      </BrowserView>
      <MobileView>
        <SanPhamMobile/>
      </MobileView>
    </div>
  );
}
