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
          <h2 className="flex w-1/12 items-center"><a href={spct.hinhAnh1}><img className="w-[80px] h-[80px]" src={spct.hinhAnh1} alt="hinhAnh1" /></a></h2>
          <h2 className="flex w-1/12 items-center"><a href={spct.hinhAnh2}><img className="w-[80px] h-[80px]" src={spct.hinhAnh2} alt="hinhAnh2" /></a></h2>
          <h2 className="flex w-1/12 items-center"><a href={spct.hinhAnh3}><img className="w-[80px] h-[80px]" src={spct.hinhAnh3} alt="hinhAnh3" /></a></h2>
        </div>
      </div>
    </div>
  );
}
