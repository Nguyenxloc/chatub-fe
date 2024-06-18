import { Button, Label, Modal, TextInput, ToggleSwitch } from "flowbite-react";
export default function CellSanPhamMobile({ cellSanPham, i }) {
  return (
    <div
      // onClick={() => router.push("/products/detail/" + cellSanPham.id)}
      className="mt-5 w-[450px] h-[150px]"
    >
      <div className="flex-cols flex gap-5">
        <img className="h-[190px] w-[200px]" src={cellSanPham.hinhAnh} alt="" />
        <div  className="">
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
            STT: {i + 1}{" "}
          </h5>
          <h5 className="trackfing-tight text-sm font-semibold text-gray-900 dark:text-white">
            Mã: {cellSanPham.ma}{" "}
          </h5>
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white ">
            Tên: {cellSanPham.ten}
          </h5>
          <h5 className="text-sm text-gray-900 dark:text-white">
            Ngày tạo: <br />
            {cellSanPham.ngayTao}
          </h5>
          <h5 className="text-sm text-gray-900 dark:text-white">
            Trạng thái:{" "}
            {!(cellSanPham.giaBan == 1) ? "Hoạt động" : "Dừng hoạt động"}
          </h5>
          <h5 className="text-sm text-gray-900 dark:text-white">
            Giá bán: {cellSanPham.giaBan}
          </h5>
        </div>
      </div>
    </div>
  );
}
