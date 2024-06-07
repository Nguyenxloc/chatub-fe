import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function CellSanPham({ cellSanPham, i }) {
  const router = useRouter();
  function routePage(idSPCT:String){
      router.push("/admin/san-pham/" + idSPCT)
      console.log("route to show all detail product: ", idSPCT);
  }
  return (
    <div
      // onClick={() => router.push("/products/detail/" + cellSanPham.id)}
      className="mt-5 w-[400px]"
    >
      <div
        className="relative w-[420px] overflow-hidden border bg-cover bg-no-repeat"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      ></div>
      <a>
        <div className="flex-cols flex gap-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            STT: {i + 1}{" "}
          </h5>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Mã: {cellSanPham.ma}{" "}
          </h5>
        </div>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Tên: {cellSanPham.ten}
        </h5>
      </a>
      <div className="">
        <h5 className="text-xl text-gray-900 dark:text-white">
          Ngày tạo: {cellSanPham.ngayTao}
        </h5>
        <h5 className="text-xl text-gray-900 dark:text-white">
          Trạng thái:{" "}
          {!(cellSanPham.giaBan == 1) ? "Hoạt động" : "Dừng hoạt động"}
        </h5>
      </div>
      <div className="flex items-center justify-between">
        <h5 className="text-xl text-gray-900 dark:text-white">
          Giá bán: {cellSanPham.giaBan}
        </h5>
        <a
          onClick={() => routePage(cellSanPham.id)}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Sửa
        </a>
      </div>
    </div>
  );
}
