import { Footerx } from "@/app/(dashboard)/component/footer";
import Navbarx from "@/app/(dashboard)/component/navbarx";
import { Button, Label, Modal, TextInput, ToggleSwitch } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiFolderAdd } from "react-icons/hi";
import CellSanPhamBrowser from "./cellSanPhamBrowser";
export default function SanPham() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [ma, setMa] = useState("");
  const [ten, setTen] = useState("");
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var todayNow = mm + "/" + dd + "/" + yyyy;
  var ngayTao = yyyy + "-" + mm + "-" + dd;
  const [hinhAnh, setHinhAnh] = useState("");
  const [giaBan, setGiaBan] = useState("");
  const [trangThai, setTrangThai] = useState(false);
  let validateOK = false;
  useEffect(() => {
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/san-pham/index",
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        console.log("data:", data);
      });
  }, []);
  function onCloseModal() {
    setOpenModal(false);
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
  function saveProduct() {
    if (validateOK) {
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
  if (!isLoading) {
    return (
      <div className="ms-2">
        <h2>this is the admin san pham page</h2>
        <Navbarx />
        <div className="me-[115px] flex flex-row-reverse">
          <Button gradientMonochrome="info" onClick={() => setOpenModal(true)}>
            <HiFolderAdd size={20} />
            Thêm sản phẩm
          </Button>
        </div>
        <div className="z-0 w-full bg-white">
          <div className="flex-cols flex gap-[50px]">
            <h5 className="w-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              STT
            </h5>
            <h5 className="trackfing-tight w-1/12 text-xl font-semibold text-gray-900 dark:text-white">
              Mã
            </h5>
            <h5 className="w-2/12 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Tên sản phẩm
            </h5>
            <h5 className="w-1/12 text-xl font-semibold text-gray-900 dark:text-white">
              Ngày tạo
            </h5>
            <h5 className="w-1/12 text-xl font-semibold text-gray-900 dark:text-white">
              Trạng thái
            </h5>
            <h5 className="w-1/12 text-xl font-semibold text-gray-900 dark:text-white">
              Giá bán
            </h5>
            <h5 className="w-2/12 text-xl font-semibold text-gray-900 dark:text-white">
              Hành động
            </h5>
            <hr />
          </div>
          {data.map((sp, i) => (
            <div>
              <CellSanPhamBrowser cellSanPham={sp} i={i} />
              <hr />
            </div>
          ))}
        </div>
        <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body className="overflow-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Thêm sản phẩm
              </h3>
              <div>
                <div className="flex justify-center">
                  <img className="h-[200px]" alt="" />
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
                <Button onClick={() => saveProduct()}>Lưu sản phẩm</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <div className="mt-5">
          <Footerx />
        </div>
      </div>
    );
  }
}
