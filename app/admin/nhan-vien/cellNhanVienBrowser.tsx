
export default function CellNhanVienBrowser({ cellNhanVien, i}) {
  return (
    <div
      // onClick={() => router.push("/products/detail/" + cellNhanVien.id)}
      className="mt-5 w-8/12"
    >
      <div className="flex flex-cols w-screen">
      <h5 className="text-xl tracking-tight text-gray-900 dark:text-white flex items-center w-[50px] ">
        {i + 1}{" "}
      </h5>
      <div className="flex items-center w-1/12 ">
      <img className="w-[70px] h-[50px]" src={cellNhanVien.hinhAnh} alt="" />
      </div>
      <h5 className="trackfing-tight text-xl text-gray-900 dark:text-white w-1/12 flex items-center ">
        {cellNhanVien.ma}{" "}
      </h5>
      <h5 className="text-xl tracking-tight text-gray-900 dark:text-white w-2/12 flex items-center ">
        {cellNhanVien.ten}
      </h5>
      <h5 className="text-xl text-gray-900 dark:text-white w-1/12 flex items-center ">
        {cellNhanVien.ngayTao}
      </h5>
      <h5 className="text-xl text-gray-900 dark:text-white w-1/12 flex items-center ">
        {!(cellNhanVien.trangThai == 1) ? "Hoạt động" : "Dừng hoạt động"}
      </h5>
      <h5 className="text-xl text-gray-900 dark:text-white w-1/12 flex items-center ">
        {cellNhanVien.giaBan}
      </h5>
      </div>
    </div>
  );
}
