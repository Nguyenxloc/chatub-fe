export default function CellHDCTBrowser({
  HDCT,
  indx,
  lstMauSac,
  lstKichThuoc,
}) {
  return (
    <div>
      <div>
        <div className="flex-cols flex w-screen">
          <h2 className="flex w-1/12 items-center">{indx + 1}</h2>
          <h2 className="flex w-1/12 items-center">{HDCT.chatLieu?HDCT.chatLieu.ten:"n/a"}</h2>
          <h2 className="flex w-1/12 items-center">{HDCT.mauSac.ten}</h2>
          <h2 className="flex w-1/12 items-center">{HDCT.kichThuoc.ten}</h2>
          <h2 className="flex w-1/12 items-center">{HDCT.soLuongTon}</h2>
          <h2 className="flex w-1/12 items-center">{HDCT.trangThai}</h2>
          <h2 className="flex w-1/12 items-center"><a href={HDCT.hinhAnh1}><img className="w-[80px] h-[80px]" src={HDCT.hinhAnh1} alt="hinhAnh1" /></a></h2>
          <h2 className="flex w-1/12 items-center"><a href={HDCT.hinhAnh2}><img className="w-[80px] h-[80px]" src={HDCT.hinhAnh2} alt="hinhAnh2" /></a></h2>
          <h2 className="flex w-1/12 items-center"><a href={HDCT.hinhAnh3}><img className="w-[80px] h-[80px]" src={HDCT.hinhAnh3} alt="hinhAnh3" /></a></h2>
        </div>
      </div>
    </div>
  );
}
