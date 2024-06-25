export default function CellKHCTBrowser({
  khct,
  indx,
  lstMauSac,
  lstKichThuoc,
}) {
  return (
    <div>
      <div>
        <div className="flex-cols flex w-screen">
          <h2 className="flex w-1/12 items-center">{indx + 1}</h2>
          <h2 className="flex w-1/12 items-center">{khct.chatLieu?khct.chatLieu.ten:"n/a"}</h2>
          <h2 className="flex w-1/12 items-center">{khct.mauSac.ten}</h2>
          <h2 className="flex w-1/12 items-center">{khct.kichThuoc.ten}</h2>
          <h2 className="flex w-1/12 items-center">{khct.soLuongTon}</h2>
          <h2 className="flex w-1/12 items-center">{khct.trangThai}</h2>
          <h2 className="flex w-1/12 items-center"><a href={khct.hinhAnh1}><img className="w-[80px] h-[80px]" src={khct.hinhAnh1} alt="hinhAnh1" /></a></h2>
          <h2 className="flex w-1/12 items-center"><a href={khct.hinhAnh2}><img className="w-[80px] h-[80px]" src={khct.hinhAnh2} alt="hinhAnh2" /></a></h2>
          <h2 className="flex w-1/12 items-center"><a href={khct.hinhAnh3}><img className="w-[80px] h-[80px]" src={khct.hinhAnh3} alt="hinhAnh3" /></a></h2>
        </div>
      </div>
    </div>
  );
}
