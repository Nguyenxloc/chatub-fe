import { Button, Checkbox, Label, Modal, TextInput, ToggleSwitch } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
export default function CellSanPham({ cellSanPham, i }) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [ma, setMa] = useState(cellSanPham.ma);
  const [ten, setTen] = useState(cellSanPham.ten);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var todayNow = mm + "/" + dd + "/" + yyyy;
  var ngayTao = yyyy+"-"+mm+"-"+dd;
  const [hinhAnh, setHinhAnh] = useState(cellSanPham.hinhAnh);
  const [giaBan, setGiaBan] = useState(cellSanPham.giaBan);
  const [trangThai, setTrangThai] = useState(false);
  let validateOK = false;
  function routePage(idSPCT:String){
      router.push("/admin/san-pham/detail/" + idSPCT)
      console.log("route to show all detail product: ", idSPCT);
  }
  function validatorNull(textValidate: String) {
    if (textValidate == "") {
      validateOK = false;
      return false;
    } else {
      validateOK = true;
      return true;
    }
  }
  function onCloseModal() {
    setOpenModal(false);
  }
  function saveProduct() {
    if (validateOK) {
     fetch("http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/san-pham/save", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ma: ma,
          ten: ten,
          trangThai: "0",
          ngayTao: ngayTao,
          hinhAnh: hinhAnh,
          giaBan: giaBan
        }),
      }).then(res=>console.log("test response: ", res.ok));
    } else {
      console.log("not do post");
    }
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
          <h5 className="text-xl font-semibold trackfing-tight text-gray-900 dark:text-white">
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
        <div className="flex flex-cols gap-1">
        <a
          onClick={() => setOpenModal(true)}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Sửa
        </a>
        <a
          onClick={() => routePage(cellSanPham.id)}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
           Quản lý
        </a>
        </div>
      
      </div>
      <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sửa sản phẩm
                </h3>
                <div>
                  <div className="flex justify-center">
                  <img className="h-[200px]" src={cellSanPham.hinhAnh} alt="" />
                  </div>
                  <div className="mb-2 block">
                    <Label htmlFor="ten" value="Tên sản phẩm" />
                  </div>
                  <TextInput
                    id="ten"
                    value={ten}
                    onChange={() => setTen(event.target.value)}
                    required
                  />
                  {!validatorNull(ten) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ngayTao" value="Ngày tạo" />
                  </div>
                  <TextInput id="ngayTao" value={todayNow} required readOnly />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="hinhAnh" value="Link Hình ảnh" />
                  </div>
                  <TextInput
                    id="hinhAnh"
                    value={hinhAnh}
                    onChange={() => setHinhAnh(event.target.value)}
                    required
                  />
                  {!validatorNull(hinhAnh) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="giaBan" value="Giá bán" />
                  </div>
                  <TextInput
                    id="giaBan"
                    value={giaBan}
                    onChange={() => setGiaBan(event.target.value)}
                    required
                  />
                  {!validatorNull(giaBan) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="trangThai" value="Trạng thái" />
                  </div>
                  <ToggleSwitch
                    checked={trangThai}
                    label="Toggle me"
                    onChange={setTrangThai}
                  />
                </div>
                <div className="w-full">
                  <Button onClick={() => saveProduct()}>Lưu sản phẩm</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
    </div>
  );
}
