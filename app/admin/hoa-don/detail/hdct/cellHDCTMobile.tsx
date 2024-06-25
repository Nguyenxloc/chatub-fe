export default function CellHDCTMobile({
  HDCT,
  indx,
  lstMauSac,
  lstKichThuoc,
}) {
  return (
    <div>
      <div>
        <div className="flex-cols flex w-screen">
          <h2 className="flex w-1/12 items-center text-xs">{indx + 1}</h2>
          <h2 className="flex w-1/12 items-center text-xs">{HDCT.chatLieu?HDCT.chatLieu.ten:"n/a"}</h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {HDCT.mauSac.ten}
          </h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {HDCT.kichThuoc.ten}
          </h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {HDCT.soLuongTon}
          </h2>
          <h2 className="flex w-1/12 items-center text-xs">{HDCT.trangThai}</h2>
        </div>
      </div>
    </div>
  );
}
