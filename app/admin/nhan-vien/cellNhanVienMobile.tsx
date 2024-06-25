import { Button, Label, Modal, TextInput, ToggleSwitch } from "flowbite-react";
export default function CellNhanVienMobile({ cellNhanVien, i }) {
  return (
    <div
      // onClick={() => router.push("/products/detail/" + cellNhanVien.id)}
      className="mt-5 w-[450px] h-[150px]"
    >
      <div className="flex-cols flex gap-5">
        <img className="h-[150px] w-[150px]" src={cellNhanVien.hinhAnh} alt="" />
        <div  className="">
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
            STT: {i + 1}{" "}
          </h5>
          <h5 className="trackfing-tight text-sm font-semibold text-gray-900 dark:text-white">
            Mã: {cellNhanVien.ma}{" "}
          </h5>
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white ">
            Tên: {cellNhanVien.ten}
          </h5>
          <h5 className="text-sm text-gray-900 dark:text-white">
            Ngày tạo: <br />
            {cellNhanVien.ngayTao}
          </h5>
          <h5 className="text-sm text-gray-900 dark:text-white">
            Trạng thái:{" "}
            {!(cellNhanVien.giaBan == 1) ? "Hoạt động" : "Dừng hoạt động"}
          </h5>
          <h5 className="text-sm text-gray-900 dark:text-white">
            Giá bán: {cellNhanVien.giaBan}
          </h5>
        </div>
      </div>
    </div>
  );
}
