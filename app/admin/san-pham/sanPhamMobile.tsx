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
import { HiFolderAdd } from "react-icons/hi";
import CellSanPham from "./cellSanPham";
export default function SanPhamMobile() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [switch1, setSwitch1] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
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
  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  function saveProduct() {}
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
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Nhập sản phẩm
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Mã sản phẩm" />
                  </div>
                  <TextInput
                    id="ma"
                    placeholder=""
                    value={ma}
                    onChange={(event) => setMa(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Tên sản phẩm" />
                  </div>
                  <TextInput
                    id="ma"
                    value={ten}
                    onChange={() => setTen(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Ngày tạo" />
                  </div>
                  <TextInput id="password" type="password" required readOnly />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="hinhAnh" value="Hình ảnh" />
                  </div>
                  <TextInput
                    id="hinhAnh"
                    value={hinhAnh}
                    onChange={() => setHinhAnh(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Giá bán" />
                  </div>
                  <TextInput
                    id="giaBan"
                    value={giaBan}
                    onChange={() => setGiaBan(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Trạng thái" />
                  </div>
                  <ToggleSwitch
                    checked={switch1}
                    label="Toggle me"
                    onChange={setSwitch1}
                  />
                </div>
                <div className="w-full">
                  <Button>Lưu sản phẩm</Button>
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
