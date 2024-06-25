
export default function CellHoaDonMobile({ cellHoaDon, i }) {
  return (
    <div
      // onClick={() => router.push("/products/detail/" + cellHoaDon.id)}
      className="mt-5 w-[450px] h-[150px]"
    >
      <div className="flex-cols flex gap-5">
        <img className="h-[150px] w-[150px]" src={cellHoaDon.hinhAnh} alt="" />
        <div  className="">
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
            STT: {i + 1}{" "}
          </h5>
          <h5 className="trackfing-tight text-sm font-semibold text-gray-900 dark:text-white">
            Mã: {cellHoaDon.ma}{" "}
          </h5>
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white ">
            Tên: {cellHoaDon.ten}
          </h5>
          <h5 className="text-sm text-gray-900 dark:text-white">
            Ngày tạo: <br />
            {cellHoaDon.ngayTao}
          </h5>
          <h5 className="text-sm text-gray-900 dark:text-white">
            Trạng thái:{" "}
            {!(cellHoaDon.giaBan == 1) ? "Hoạt động" : "Dừng hoạt động"}
          </h5>
          <h5 className="text-sm text-gray-900 dark:text-white">
            Giá bán: {cellHoaDon.giaBan}
          </h5>
        </div>
      </div>
    </div>
  );
}
