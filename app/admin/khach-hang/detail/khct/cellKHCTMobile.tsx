export default function CellKHCTMobile({
  khct,
  indx,
  lstMauSac,
  lstKichThuoc,
}) {
  return (
    <div>
      <div>
        <div className="flex-cols flex w-screen">
          <h2 className="flex w-1/12 items-center text-xs">{indx + 1}</h2>
          <h2 className="flex w-1/12 items-center text-xs">{khct.chatLieu?khct.chatLieu.ten:"n/a"}</h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {khct.mauSac.ten}
          </h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {khct.kichThuoc.ten}
          </h2>
          <h2 className="ms-[20px] flex w-1/12 items-center text-xs">
            {khct.soLuongTon}
          </h2>
          <h2 className="flex w-1/12 items-center text-xs">{khct.trangThai}</h2>
        </div>
      </div>
    </div>
  );
}
