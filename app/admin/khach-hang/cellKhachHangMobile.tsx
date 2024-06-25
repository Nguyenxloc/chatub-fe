import { Button, Label, Modal, TextInput, ToggleSwitch } from "flowbite-react";
export default function CellKhachHangMobile({ cellKhachHang, i }) {
  return (
    <div
      // onClick={() => router.push("/products/detail/" + cellKhachHang.id)}
      className="mt-5 w-[450px] h-[150px]"
    >
      <div className="flex-cols flex gap-5">
        <img className="h-[150px] w-[150px]" src={cellKhachHang.hinhAnh} alt="" />
        <div  className="">
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
            STT: {i + 1}{" "}
          </h5>
          <h5 className="trackfing-tight text-sm font-semibold text-gray-900 dark:text-white">
            Mã: {cellKhachHang.ma}{" "}
          </h5>
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white ">
            Tên: {cellKhachHang.ten}
          </h5>
          <h5 className="text-sm text-gray-900 dark:text-white">
            Ngày tạo: <br />
            {cellKhachHang.ngayTao}
          </h5>
          <h5 className="text-sm text-gray-900 dark:text-white">
            Trạng thái:{" "}
            {!(cellKhachHang.giaBan == 1) ? "Hoạt động" : "Dừng hoạt động"}
          </h5>
          <h5 className="text-sm text-gray-900 dark:text-white">
            Giá bán: {cellKhachHang.giaBan}
          </h5>
        </div>
      </div>
    </div>
  );
}
