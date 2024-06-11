import { Button } from "flowbite-react";
import { useEffect, useState } from "react";

export default function CellSPCT({ spct,indx }) {
  // inital hooks useeffect
    return (
      <div>
        <hr />
        <div className="flex-cols flex gap-5">
          <h2>STT</h2>
          <h2>Chất liệu</h2>
          <h2>Màu sắc</h2>
          <h2>Kích thước</h2>
          <h2>Số lượng</h2>
        </div>
          <div>
            <div className="flex-cols flex gap-5">
              <h2>{indx+1}</h2>
              <h2>spct.chatLieu</h2>
              <h2>{spct.mauSac.ten}</h2>
              <h2>{spct.kichThuoc.ten}</h2>
              <h2 className="ms-[50px]">{spct.soLuongTon}</h2>
            </div>
            <div className="flex flex-row-reverse"> 
            <Button>Sửa</Button>
            </div>
            <hr />
          </div>
      </div>
    );
}
