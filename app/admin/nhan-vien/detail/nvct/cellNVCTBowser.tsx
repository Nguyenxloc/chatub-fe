export default function CellNVCTBrowser({
  nvct,
  indx,
  lstMauSac,
  lstKichThuoc,
}) {
  return (
    <div>
      <div>
        <div className="flex-cols flex w-screen">
          <h2 className="flex w-1/12 items-center">{indx + 1}</h2>
          <h2 className="flex w-1/12 items-center">{nvct.chatLieu?nvct.chatLieu.ten:"n/a"}</h2>
          <h2 className="flex w-1/12 items-center">{nvct.mauSac.ten}</h2>
          <h2 className="flex w-1/12 items-center">{nvct.kichThuoc.ten}</h2>
          <h2 className="flex w-1/12 items-center">{nvct.soLuongTon}</h2>
          <h2 className="flex w-1/12 items-center">{nvct.trangThai}</h2>
          <h2 className="flex w-1/12 items-center"><a href={nvct.hinhAnh1}><img className="w-[80px] h-[80px]" src={nvct.hinhAnh1} alt="hinhAnh1" /></a></h2>
          <h2 className="flex w-1/12 items-center"><a href={nvct.hinhAnh2}><img className="w-[80px] h-[80px]" src={nvct.hinhAnh2} alt="hinhAnh2" /></a></h2>
          <h2 className="flex w-1/12 items-center"><a href={nvct.hinhAnh3}><img className="w-[80px] h-[80px]" src={nvct.hinhAnh3} alt="hinhAnh3" /></a></h2>
        </div>
      </div>
    </div>
  );
}
