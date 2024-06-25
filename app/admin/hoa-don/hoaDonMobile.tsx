"use client";
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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiFolderAdd } from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CellHoaDonMobile from "./cellHoaDonMobile";
export default function HoaDonMobile() {
  const router = useRouter();
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var todayNow = mm + "/" + dd + "/" + yyyy;
  var ngayTaoSys = yyyy + "-" + mm + "-" + dd;
  const [id, setId] = useState("");
  const [ma, setMa] = useState("");
  const [ten, setTen] = useState("");
  const [ngayTao, setNgayTao] = useState(ngayTaoSys);
  const [hinhAnh, setHinhAnh] = useState("");
  const [giaBan, setGiaBan] = useState("");
  const [trangThai, setTrangThai] = useState(false);
  const [refkey, setRefkey] = useState(0);
  let validateOK = false;
  useEffect(() => {
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/hoa-don/index?page=" +
        currentPage,
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setRefkey(0);
        console.log("data:", data);
      });
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/hoa-don/count")
        .then((res) => res.json())
        .then((data) => {
          setLastPage(Math.ceil(data/20));
          console.log("data:", Math.ceil(data/20));
        });
    console.log("test current page: ", currentPage);
  }, [refkey, currentPage]);

  function onCloseModalAdd() {
    setOpenModalAdd(false);
    console.log("test ref: ", refkey);
  }
  function onOpenModalEdit(hdParam: object) {
    setId(hdParam.id);
    setMa(hdParam.ma);
    setTen(hdParam.ten);
    setTrangThai(hdParam.trangThai);
    setNgayTao(hdParam.ngayTao);
    setHinhAnh(hdParam.hinhAnh);
    setGiaBan(hdParam.giaBan);
  }
  function onCloseModalEdit() {
    setOpenModalEdit(false);
    resetState();
    console.log("test ref: ", refkey);
  }
  function resetState() {
    setId("");
    setMa("");
    setTen("");
    setTrangThai(false);
    setNgayTao("");
    setHinhAnh("");
    setGiaBan("");
  }

  function doSetRefKey() {
    setRefkey(1);
    console.log("test ref: ", refkey);
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
  function routePage(idHDCT: String) {
    router.push("/admin/san-pham/detail/" + idHDCT);
    console.log("route to show all detail product: ", idHDCT);
  }

  function updateProduct() {
    if (validateOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/hoa-don/save",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ten: ten,
            trangThai: "0",
            ngayTao: ngayTao,
            hinhAnh: hinhAnh,
            giaBan: giaBan,
          }),
        },
      ).then((res) => console.log("test rehdonse: ", res.ok));
    } else {
      console.log("not do post");
    }
  }
  return (
    <div id="hdmobile" className="ms-2 bg-white w-screen">
      <Navbarx />
      <div className="flex flex-row-reverse me-5">
        <Button gradientMonochrome="info" onClick={() => setOpenModalAdd(true)}>
          <HiFolderAdd size={20} />
          Thêm sản phẩm
        </Button>
      </div>
      {!isLoading ? (
        <div className="z-0 ms-5 mt-5 w-full">
          {data.map((hd, i) => (
            <div>
              <div className="">
                <CellHoaDonMobile   cellHoaDon={hd} i={i} />
                <div className="flex-cols flex items-center gap-1 ms-[160px]">
                  <Button
                    className="flex h-[40px] w-[90px] items-center"
                    onClick={() => {
                      setOpenModalEdit(true), onOpenModalEdit(hd);
                    }}
                  >
                    Sửa
                  </Button>
                  <Button
                    className="flex h-[40px] w-[90px] items-center"
                    onClick={() => routePage(hd.id)}
                  >
                    Quản lý
                  </Button>
                </div>
              </div>
              <hr />
            </div>
          ))}
          <Modal
            show={openModalEdit}
            onClose={onCloseModalEdit}
            popup
            className="w-11/12"
          >
            <Modal.Header />
            <Modal.Body className="overflow-auto">
              <div className="hdace-y-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sửa sản phẩm
                </h3>
                <div className="flex justify-center">
                  <img className="h-[200px]" src={hinhAnh} alt="" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ma" value="Mã sản phẩm" />
                  </div>
                  <TextInput
                    id="ma"
                    value={ma}
                    onChange={() => setMa(event.target.value)}
                    required
                  />
                  {!validatorNull(ma) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    ""
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
                  <Button
                    onClick={() => {
                      updateProduct();
                    }}
                  >
                    Lưu sản phẩm
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <Modal show={openModalAdd} className="w-11/12"  onClose={onCloseModalAdd} popup>
            <Modal.Header />
            <Modal.Body className="overflow-auto">
              <div className="hdace-y-2">
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
        </div>
      ) : (
        <Skeleton count={20} />
      )}
      <div className="flex overflow-x-auto sm:justify-center">
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
