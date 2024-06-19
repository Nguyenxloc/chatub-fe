
export default function CellSPCTMobile({ spct, indx, lstMauSac, lstKichThuoc }) {

  return (
    <div>
      <div>
        <div className="flex-cols flex border-b-2">
          <h2 className="flex w-1/12 items-center text-xs">{indx + 1}</h2>
          <h2 className="flex w-2/12 items-center text-xs">Da bò</h2>
          <h2 className="flex w-2/12 items-center text-xs">
            {spct.mauSac.ten}
          </h2>
          <h2 className="flex w-2/12 items-center text-xs">
            {spct.kichThuoc.ten}
          </h2>
          <h2 className="flex w-1/12 items-center text-xs">
            {spct.soLuongTon}
          </h2>
          <h2 className="flex w-2/12 items-center text-xs">{spct.trangThai}</h2>
        </div>
      </div>
    </div>
  );
}
