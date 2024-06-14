import { Button, Label, Modal, TextInput, ToggleSwitch } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function CellSanPhamBrowser({ cellSanPham, i, setRefParam }) {
  const router = useRouter();
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
  let validateOK = false;
  function routePage(idSPCT: String) {
    router.push("/admin/san-pham/detail/" + idSPCT);
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
  function updateProduct() {
    if (validateOK) {
      setRefParam(1);
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/san-pham/save",
        {
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
            giaBan: giaBan,
          }),
        },
      ).then((res) => console.log("test response: ", res.ok));
    } else {
      console.log("not do post");
    }
  }

  return (
    <div
      // onClick={() => router.push("/products/detail/" + cellSanPham.id)}
      className="mt-5 flex flex-cols gap-[50px]"
    >
      <h5 className="text-xl tracking-tight text-gray-900 dark:text-white w-5 flex items-center">
        {i + 1}{" "}
      </h5>
      <div className="flex items-center">
      <img className="w-[70px] h-[50px]" src={cellSanPham.hinhAnh} alt="" />
      </div>
      <h5 className="trackfing-tight text-xl text-gray-900 dark:text-white w-1/12 flex items-center ">
        {cellSanPham.ma}{" "}
      </h5>
      <h5 className="text-xl tracking-tight text-gray-900 dark:text-white w-2/12 flex items-center">
        {cellSanPham.ten}
      </h5>
      <h5 className="text-xl text-gray-900 dark:text-white w-1/12 flex items-center">
        {cellSanPham.ngayTao}
      </h5>
      <h5 className="text-xl text-gray-900 dark:text-white w-1/12 flex items-center">
        {!(cellSanPham.giaBan == 1) ? "Hoạt động" : "Dừng hoạt động"}
      </h5>
      <h5 className="text-xl text-gray-900 dark:text-white w-1/12 flex items-center">
        {cellSanPham.giaBan}
      </h5>
      <div className="flex-cols flex gap-1 w-2/12">
        <Button className="w-4/12" onClick={() => setOpenModal(true)}>Sửa</Button>
        <Button className="w-4/12" onClick={() => routePage(cellSanPham.id)}>Quản lý</Button>
      </div>
      <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body className="overflow-auto">
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
                ""
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
                ""
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
                ""
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
              <Button onClick={() => updateProduct()}>Lưu sản phẩm</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
