export default function CellNVCTMobile({
  nvct,
  indx,
  lstMauSac,
  lstKichThuoc,
}) {
  return (
    <div>
      <div>
        <div className="flex-cols flex w-screen">
          <h2 className="flex w-1/12 items-center text-xs">{indx + 1}</h2>
          <h2 className="flex w-1/12 items-center text-xs">{nvct.chatLieu?nvct.chatLieu.ten:"n/a"}</h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {nvct.mauSac.ten}
          </h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {nvct.kichThuoc.ten}
          </h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {nvct.soLuongTon}
          </h2>
          <h2 className="flex w-1/12 items-center text-xs">{nvct.trangThai}</h2>
        </div>
      </div>
    </div>
  );
}
