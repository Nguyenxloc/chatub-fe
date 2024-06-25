export default function CellghctMobile({
  ghct,
  indx,
  lstMauSac,
  lstKichThuoc,
}) {
  return (
    <div>
      <div>
        <div className="flex-cols flex w-screen">
          <h2 className="flex w-1/12 items-center text-xs">{indx + 1}</h2>
          <h2 className="flex w-1/12 items-center text-xs">{ghct.chatLieu?ghct.chatLieu.ten:"n/a"}</h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {ghct.mauSac.ten}
          </h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {ghct.kichThuoc.ten}
          </h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {ghct.soLuongTon}
          </h2>
          <h2 className="flex w-1/12 items-center text-xs">{ghct.trangThai}</h2>
        </div>
      </div>
    </div>
  );
}
