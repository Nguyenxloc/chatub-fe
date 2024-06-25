import { Footerx } from "@/app/(dashboard)/component/footer";
import Navbarx from "@/app/(dashboard)/component/navbarx";
import {
  Button,
  Dropdown,
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
import CellNhanVienBrowser from "./cellNhanVienBrowser";
export default function NhanVien() {
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
  const [id, setId] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [gioiTinh, setGioiTinh] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [sdt, setSDT] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [idCV, setIDCV] = useState("");
  const [hinhAnh, setHinhAnh] = useState("");
  const [trangThai, setTrangThai] = useState(false);
  const [refkey, setRefkey] = useState(0);
  let validateOK = false;
  useEffect(() => {
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/nhan-vien/index?page=" +
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
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/nhan-vien/count",
    )
      .then((res) => res.json())
      .then((data) => {
        setLastPage(Math.ceil(data / 20));
        console.log("data:", Math.ceil(data / 20));
      });
    console.log("test current page: ", currentPage);
  }, [refkey, currentPage]);
  function saveProduct() {
    if (validateOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/nhan-vien/save",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ten: ten,
            trangThai: "1",
            ngayTao: ngayTao,
            hinhAnh: hinhAnh,
            giaBan: giaBan,
          }),
        },
      ).then((res) => console.log("test renvonse: ", res.ok));
      setRefkey(1);
      setCurrentPage(lastPage);
    } else {
      console.log("not do post");
    }
  }
  function updateProduct() {
    if (validateOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/nhan-vien/save",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            hoTen: hoTen,
            gioiTinh: gioiTinh,
            ngaySinh: ngaySinh,
            sdt: sdt,
            matKhau: matKhau,
            idCV: idCV,
            trangThai: 1,
          }),
        },
      ).then((res) => console.log("test renvonse: ", res.ok));
    } else {
      console.log("not do post");
    }
  }

  function onCloseModalAdd() {
    setOpenModalAdd(false);
    console.log("test ref: ", refkey);
  }
  function onOpenModalEdit(nvParam: object) {
    setId(nvParam.id);
    setHoTen(nvParam.hoTen);
    setNgaySinh(nvParam.ngaySinh);
    setSDT(nvParam.sdt);
    setMatKhau(nvParam.matKhau);
    setIDCV(nvParam.idCV);
    setTrangThai(nvParam.trangThai);
  }
  function onCloseModalEdit() {
    setOpenModalEdit(false);
    resetState();
    console.log("test ref: ", refkey);
  }
  function resetState() {
    setId("");
    setHoTen("");
    setGioiTinh("");
    setNgaySinh("");
    setSDT("");
    setMatKhau("");
    setIDCV("");
    setTrangThai(false);
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
  function routePage(idNVCT: String) {
    router.push("/admin/nhan-vien/detail/" + idNVCT);
    console.log("route to show all detail product: ", idNVCT);
  }

  return (
    <div id="nhanVienBrowser" className="ms-2 bg-white">
      <h2>this is the admin san pham page</h2>
      <Navbarx />
      <div className="me-[115px] flex flex-row-reverse">
        <Button gradientMonochrome="info" onClick={() => setOpenModalAdd(true)}>
          <HiFolderAdd size={20} />
          Thêm sản phẩm
        </Button>
      </div>
      {!isLoading ? (
        <div id="formAdd" className="z-0 ms-5 mt-5 w-full">
          <div className="flex-cols md-[20px] flex w-screen">
            <h5 className="w-[50px] text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
              STT
            </h5>
            <h5 className="w-1/12 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
              Hình ảnh
            </h5>
            <h5 className="trackfing-tight w-1/12 text-xl font-semibold text-gray-900 dark:text-white ">
              Họ tên
            </h5>
            <h5 className="w-2/12 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
              Giới tính
            </h5>
            <h5 className="w-1/12 text-xl font-semibold text-gray-900 dark:text-white ">
              Ngày sinh
            </h5>
            <h5 className="w-1/12 text-xl font-semibold text-gray-900 dark:text-white ">
              SĐT
            </h5>
            <h5 className="w-1/12 text-xl font-semibold text-gray-900 dark:text-white ">
              Chức vụ
            </h5>
            <h5 className="w-1/12 text-xl font-semibold text-gray-900 dark:text-white ">
              Trạng thái
            </h5>
            <hr />
          </div>
          {data.map((nv, i) => (
            <div id={nv.id}>
              <div className="flex-cols flex w-screen">
                <CellNhanVienBrowser cellNhanVien={nv} i={i} />
                <div className="flex-cols flex w-2/12 items-center gap-1">
                  <Button
                    className="flex h-[50px] w-[100px] items-center"
                    onClick={() => {
                      setOpenModalEdit(true), onOpenModalEdit(nv);
                    }}
                  >
                    Sửa
                  </Button>
                  <Button
                    className="flex h-[50px] w-[100px] items-center"
                    onClick={() => routePage(nv.id)}
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
            size="xl"
            onClose={onCloseModalEdit}
            popup
          >
            <Modal.Header />
            <Modal.Body className="overflow-auto">
              <div className="nvace-y-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sửa thông tin
                </h3>
                <div className="flex justify-center">
                  <img className="h-[200px]" src={hinhAnh} alt="" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ma" value="Mã sản phẩm" />
                  </div>
                  <TextInput
                    id="hoTenAdd"
                    value={hoTen}
                    onChange={() => setHoTen(event.target.value)}
                    required
                  />
                  {!validatorNull(hoTen) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="gioiTinhADD" value="Giới tính" />
                  </div>
                  <Dropdown label="Giới tính" dismissOnClick={false}>
                    <Dropdown.Item value="male" onClick={()=>setGioiTinh(event.target.value)}>Nam</Dropdown.Item>
                    <Dropdown.Item value="female" onClick={()=>setGioiTinh(event.target.value)}>Nữ</Dropdown.Item>
                  </Dropdown>
                  {!validatorNull(gioiTinh) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ngaySinhAdd" value="Ngày sinh" />
                  </div>
                  {/* need to covert */}
                  <TextInput id="ngaySinhAdd" type="date" value={ngaySinh} required readOnly />
                  {!validatorNull(ngaySinh) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="hinhAnhAdd" value="Link Hình ảnh" />
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
                    <Label htmlFor="sdtAdd" value="Số điện thoại" />
                  </div>
                  <TextInput
                    id="sdtAdd"
                    value={sdt}
                    onChange={() => setSDT(event.target.value)}
                    required
                  />
                  {!validatorNull(sdt) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="matKhauAdd" value="Mật khẩu" />
                  </div>
                  <TextInput
                    id="matKhauAdd"
                    value={matKhau}
                    onChange={() => setMatKhau(event.target.value)}
                    required
                  />
                  {!validatorNull(matKhau) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="chucVuADD" value="Chức vụ" />
                  </div>
                  <Dropdown label="Chức vụ" dismissOnClick={false}>
                    <Dropdown.Item value="lstchucvu" onClick={()=>setIDCV(event.target.value)}>mng</Dropdown.Item>
                    <Dropdown.Item value="lstchucvu" onClick={()=>setIDCV(event.target.value)}>staff</Dropdown.Item>
                  </Dropdown>
                  {!validatorNull(idCV) ? (
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
          <Modal show={openModalAdd} size="xl" onClose={onCloseModalAdd} popup>
            <Modal.Header />
            <Modal.Body className="overflow-auto">
              <div className="nvace-y-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sửa thông tin
                </h3>
                <div className="flex justify-center">
                  <img className="h-[200px]" src={hinhAnh} alt="" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ma" value="Mã sản phẩm" />
                  </div>
                  <TextInput
                    id="hoTenEdit"
                    value={hoTen}
                    onChange={() => setHoTen(event.target.value)}
                    required
                  />
                  {!validatorNull(hoTen) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="gioiTinhEdit" value="Giới tính" />
                  </div>
                  <Dropdown label="Giới tính" dismissOnClick={false}>
                    <Dropdown.Item value="male" onClick={()=>setGioiTinh(event.target.value)}>Nam</Dropdown.Item>
                    <Dropdown.Item value="female" onClick={()=>setGioiTinh(event.target.value)}>Nữ</Dropdown.Item>
                  </Dropdown>
                  {!validatorNull(gioiTinh) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ngaySinhEdit" value="Ngày sinh" />
                  </div>
                  {/* need to covert */}
                  <TextInput id="ngaySinhEdit" type="date" value={ngaySinh} required readOnly />
                  {!validatorNull(ngaySinh) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="hinhAnhEdit" value="Link Hình ảnh" />
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
                    <Label htmlFor="sdtEdit" value="Số điện thoại" />
                  </div>
                  <TextInput
                    id="sdtAdd"
                    value={sdt}
                    onChange={() => setSDT(event.target.value)}
                    required
                  />
                  {!validatorNull(sdt) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="matKhauEdit" value="Mật khẩu" />
                  </div>
                  <TextInput
                    id="matKhauEdit"
                    value={matKhau}
                    onChange={() => setMatKhau(event.target.value)}
                    required
                  />
                  {!validatorNull(matKhau) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="chucVuEdit" value="Chức vụ" />
                  </div>
                  <Dropdown label="Chức vụ" dismissOnClick={false}>
                    <Dropdown.Item value="lstchucvu" onClick={()=>setIDCV(event.target.value)}>mng</Dropdown.Item>
                    <Dropdown.Item value="lstchucvu" onClick={()=>setIDCV(event.target.value)}>staff</Dropdown.Item>
                  </Dropdown>
                  {!validatorNull(idCV) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="trangThaiEdit" value="Trạng thái" />
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
                      saveProduct();
                    }}
                  >
                    Lưu sản phẩm
                  </Button>
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
