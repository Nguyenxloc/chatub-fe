export default function CellSPCTMobile({
  spct,
  indx,
  lstMauSac,
  lstKichThuoc,
}) {
  return (
    <div>
      <div>
        <div className="flex-cols flex w-screen">
          <h2 className="flex w-1/12 items-center text-xs">{indx + 1}</h2>
          <h2 className="flex w-1/12 items-center text-xs">{spct.chatLieu?spct.chatLieu.ten:"n/a"}</h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {spct.mauSac.ten}
          </h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {spct.kichThuoc.ten}
          </h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {spct.soLuongTon}
          </h2>
          <h2 className="flex w-1/12 items-center text-xs">{spct.trangThai}</h2>
        </div>
      </div>
    </div>
  );
}
