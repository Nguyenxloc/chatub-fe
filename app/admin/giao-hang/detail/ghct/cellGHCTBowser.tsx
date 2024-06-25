export default function CellghctBrowser({
  ghct,
  indx,
  lstMauSac,
  lstKichThuoc,
}) {
  return (
    <div>
      <div>
        <div className="flex-cols flex w-screen">
          <h2 className="flex w-1/12 items-center">{indx + 1}</h2>
          <h2 className="flex w-1/12 items-center">{ghct.chatLieu?ghct.chatLieu.ten:"n/a"}</h2>
          <h2 className="flex w-1/12 items-center">{ghct.mauSac.ten}</h2>
          <h2 className="flex w-1/12 items-center">{ghct.kichThuoc.ten}</h2>
          <h2 className="flex w-1/12 items-center">{ghct.soLuongTon}</h2>
          <h2 className="flex w-1/12 items-center">{ghct.trangThai}</h2>
          <h2 className="flex w-1/12 items-center"><a href={ghct.hinhAnh1}><img className="w-[80px] h-[80px]" src={ghct.hinhAnh1} alt="hinhAnh1" /></a></h2>
          <h2 className="flex w-1/12 items-center"><a href={ghct.hinhAnh2}><img className="w-[80px] h-[80px]" src={ghct.hinhAnh2} alt="hinhAnh2" /></a></h2>
          <h2 className="flex w-1/12 items-center"><a href={ghct.hinhAnh3}><img className="w-[80px] h-[80px]" src={ghct.hinhAnh3} alt="hinhAnh3" /></a></h2>
        </div>
      </div>
    </div>
  );
}
