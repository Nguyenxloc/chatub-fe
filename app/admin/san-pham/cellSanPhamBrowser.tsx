import { Button, Label, Modal, TextInput, ToggleSwitch } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function CellSanPhamBrowser({ cellSanPham, i}) {
  const [openModal, setOpenModal] = useState(false);
  const [ma, setMa] = useState(cellSanPham.ma);
  const [ten, setTen] = useState(cellSanPham.ten);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var todayNow = mm + "/" + dd + "/" + yyyy;
  var ngayTao = yyyy + "-" + mm + "-" + dd;
  const [hinhAnh, setHinhAnh] = useState(cellSanPham.hinhAnh);
  const [giaBan, setGiaBan] = useState(cellSanPham.giaBan);
  const [trangThai, setTrangThai] = useState(false);
  return (
    <div
      // onClick={() => router.push("/products/detail/" + cellSanPham.id)}
      className="mt-5 w-8/12"
    >
      <div className="flex flex-cols w-screen">
      <h5 className="text-xl tracking-tight text-gray-900 dark:text-white flex items-center w-[50px] ">
        {i + 1}{" "}
      </h5>
      <div className="flex items-center w-1/12 ">
      <img className="w-[70px] h-[50px]" src={cellSanPham.hinhAnh} alt="" />
      </div>
      <h5 className="trackfing-tight text-xl text-gray-900 dark:text-white w-1/12 flex items-center ">
        {cellSanPham.ma}{" "}
      </h5>
      <h5 className="text-xl tracking-tight text-gray-900 dark:text-white w-2/12 flex items-center ">
        {cellSanPham.ten}
      </h5>
      <h5 className="text-xl text-gray-900 dark:text-white w-1/12 flex items-center ">
        {cellSanPham.ngayTao}
      </h5>
      <h5 className="text-xl text-gray-900 dark:text-white w-1/12 flex items-center ">
        {!(cellSanPham.trangThai == 1) ? "Hoạt động" : "Dừng hoạt động"}
      </h5>
      <h5 className="text-xl text-gray-900 dark:text-white w-1/12 flex items-center ">
        {cellSanPham.giaBan}
      </h5>
      </div>
    </div>
  );
}
