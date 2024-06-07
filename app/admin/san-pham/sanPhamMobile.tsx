import { Footerx } from "@/app/(dashboard)/component/footer";
import Navbarx from "@/app/(dashboard)/component/navbarx";
import {
  Button,
  Label,
  Modal,
  Pagination,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { HiCheckCircle, HiFolderAdd } from "react-icons/hi";
import CellSanPham from "./cellSanPham";
export default function SanPhamMobile() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [ma, setMa] = useState("");
  const [ten, setTen] = useState("");
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var todayNow = mm + "/" + dd + "/" + yyyy;
  var ngayTao = yyyy+"-"+mm+"-"+dd;
  const [hinhAnh, setHinhAnh] = useState("");
  const [giaBan, setGiaBan] = useState("");
  const [trangThai, setTrangThai] = useState(false);
  let validateOK = false;
  const onPageChange = (page: number) => setCurrentPage(page);
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
  if (isLoading == false) {
    return (
      <div className="ms-1">
        <h2>this is the admin san pham page</h2>
        <Navbarx />
        <div className="z-0 w-full bg-white">
          <Button gradientMonochrome="info" onClick={() => setOpenModal(true)}>
            <HiFolderAdd size={20} />
            Thêm sản phẩm
          </Button>
          <div className="grid grid-cols-1 grid-rows-3 gap-4">
            {data.map((sp, i) => (
              <CellSanPham cellSanPham={sp} i={i} />
            ))}
          </div>
          <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Nhập sản phẩm
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ma" value="Mã sản phẩm(fix server tự tăng)" />
                  </div>
                  <TextInput
                    id="ma"
                    placeholder=""
                    value={ma}
                    onChange={(event) => setMa(event.target.value)}
                    required
                  />
                  {!validatorNull(ma) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div>
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
          <Pagination
            currentPage={currentPage}
            totalPages={100}
            onPageChange={onPageChange}
          />
        </div>
        <div className="mt-5">
          <Footerx />
        </div>
      </div>
    );
  }
}
