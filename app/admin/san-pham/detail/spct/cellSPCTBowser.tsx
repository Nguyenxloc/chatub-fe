export default function CellSPCTBrowser({
  spct,
  indx,
  lstMauSac,
  lstKichThuoc,
}) {
  return (
    <div>
      <div>
        <div className="flex-cols flex w-screen">
          <h2 className="flex w-1/12 items-center">{indx + 1}</h2>
          <h2 className="flex w-1/12 items-center">{spct.chatLieu?spct.chatLieu.ten:"n/a"}</h2>
          <h2 className="flex w-1/12 items-center">{spct.mauSac.ten}</h2>
          <h2 className="flex w-1/12 items-center">{spct.kichThuoc.ten}</h2>
          <h2 className="flex w-1/12 items-center">{spct.soLuongTon}</h2>
          <h2 className="flex w-1/12 items-center">{spct.trangThai}</h2>
          <h2 className="flex w-1/12 items-center">Hình ảnh 1</h2>
          <h2 className="flex w-1/12 items-center">Hình ảnh 2</h2>
          <h2 className="flex w-1/12 items-center">Hình ảnh 3</h2>
        </div>
      </div>
    </div>
  );
}
