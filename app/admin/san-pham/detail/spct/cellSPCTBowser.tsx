
export default function CellSPCTBrowser({ spct,indx,lstMauSac,lstKichThuoc }) {
    return (
      <div>
          <div>
            <div className="flex flex-cols w-screen">
              <h2 className="w-1/12 flex items-center">{indx+1}</h2>
              <h2 className="w-1/12 flex items-center">{spct.chatLieu}</h2>
              <h2 className="w-1/12 flex items-center">{spct.mauSac.ten}</h2>
              <h2 className="w-1/12 flex items-center">{spct.kichThuoc.ten}</h2>
              <h2 className="w-1/12 flex items-center">{spct.soLuongTon}</h2>
              <h2 className="w-1/12 flex items-center">{spct.trangThai}</h2>
              <h2 className="w-1/12 flex items-center">Hình ảnh 1</h2>
              <h2 className="w-1/12 flex items-center">Hình ảnh 2</h2>
              <h2 className="w-1/12 flex items-center">Hình ảnh 3</h2>
            </div>
          </div>
      </div>
    );
}
