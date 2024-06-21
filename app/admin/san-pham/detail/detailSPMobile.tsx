import { Footerx } from "@/app/(dashboard)/component/footer";
import Navbarx from "@/app/(dashboard)/component/navbarx";
import {
  Button,
  Checkbox,
  Dropdown,
  Label,
  Modal,
  Pagination,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HiCheckCircle, HiFolderAdd } from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CellSPCTMobile from "./spct/cellSPCTMobile";
export default function DetailSPMobile() {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalAddCboMauSac, setOpenModalAddCboMauSac] = useState(false);
  const [openModalAddCboKichThuoc, setOpenModalAddCboKichThuoc] = useState(false);
  const [openModalAddCboChatLieu, setOpenModalAddCboChatLieu] = useState(false);
  const [dataSanPham, setDataSanPham] = useState(null);
  const [dataSPCT, setDataSPCT] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSPCT, setIsLoadingSPCT] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const [idSPCT, setIdSPCT] = useState("");
  const [sp, setSP] = useState("");
  const [mauSac, setMauSac] = useState("");
  const [kichThuoc, setKichThuoc] = useState("");
  const [chatLieu, setChatLieu] = useState("");
  const [namBH, setNamBH] = useState("");
  const [moTa, setMoTa] = useState("");
  const [soLuongTon, setSoLuongTon] = useState("");
  const [giaNhap, setGiaNhap] = useState("");
  const [giaBan, setGiaBan] = useState("");
  const [ngayTao, setNgayTao] = useState("");
  const [trangThai, setTrangThai] = useState(false);
  const [hinhAnh1, setHinhAnh1] = useState("");
  const [hinhAnh2, setHinhAnh2] = useState("");
  const [hinhAnh3, setHinhAnh3] = useState("");
  const [lstMauSac, setLstMauSac] = useState();
  const [lstKichThuoc, setLstKichThuoc] = useState();
  const [lstChatLieu, setLstChatLieu] = useState();
  const [isLoadingLstMauSac, setIsLoadingLstMauSac] = useState(true);
  const [isLoadingLstKichThuoc, setIsLoadingLstKichThuoc] = useState(true);
  const [isLoadingLstChatLieu, setIsLoadingLstChatLieu] = useState(true);
  const [refKey, setRefkey] = useState(0);
  const [lastPage, setLastPage] = useState(1);
  const [idspctHold, setIdspctHold] = useState("");
  let validateOK = false;
  function onCloseModalAdd() {
    setOpenModalAdd(false);
  }
  function onCloseModalEdit() {
    setOpenModalEdit(false);
    resetState();
  }
  function onCloseModalAddCboMauSac(){
    setOpenModalAddCboMauSac(false); 
  }
  function onCloseModalAddCboKichThuoc(){
    setOpenModalAddCboKichThuoc(false); 
  }
  function onCloseModalAddCboChatLieu(){
    setOpenModalAddCboChatLieu(false); 
  }
  function onOpenModalEdit(spct: object) {
    setIdSPCT(spct.id);
    setSP(spct.sp);
    setNamBH(spct.namBH);
    setMoTa(spct.moTa);
    setSoLuongTon(spct.soLuongTon);
    setGiaBan(spct.giaBan);
    setGiaNhap(spct.giaNhap);
    setNgayTao(spct.ngayTao);
    setTrangThai(spct.trangThai);
    setHinhAnh1(spct.hinhAnh1);
    setHinhAnh2(spct.hinhAnh2);
    setHinhAnh3(spct.hinhAnh3);
    setMauSac(spct.mauSac);
    setKichThuoc(spct.kichThuoc);
    setChatLieu(spct.chatLieu);
  }

  function resetState() {
    setIdSPCT("");
    setSP("");
    setMauSac("");
    setKichThuoc("");
    setNamBH("");
    setMoTa("");
    setSoLuongTon("");
    setGiaBan("");
    setGiaNhap("");
    setNgayTao("");
    setTrangThai(false);
    setHinhAnh1("");
    setHinhAnh2("");
    setHinhAnh3("");
  }

  const params = useParams<{ id: string }>();
  function validatorNull(textValidate: String) {
    if (textValidate == "") {
      validateOK = false;
      return false;
    } else {
      validateOK = true;
      return true;
    }
  }

  function addSPCT() {
    if (validateOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-sp/save",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idSp: params.id,
            idMauSac: mauSac.id,
            idKichThuoc: kichThuoc.id,
            namBH: namBH,
            moTa: moTa,
            soLuongTon: soLuongTon,
            giaNhap: giaNhap,
            giaBan: giaBan,
            trangThai: "1",
            hinhAnh1: hinhAnh1,
            hinhAnh2: hinhAnh2,
            hinhAnh3: hinhAnh3,
          }),
        },
      ).then((res) => console.log("test response: ", res));
      console.log("idsp", params.id);
      console.log("idmausac", mauSac.id);
      console.log("idkichthuoc", kichThuoc.id);
      setRefkey(1);
      setCurrentPage(lastPage);
    } else {
      console.log("not do post");
    }
  }
  function updateSPCT(idparam: string) {
    if (validateOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-sp/update/" +
          idparam,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idMauSac: mauSac.id,
            idKichThuoc: kichThuoc.id,
            namBH: namBH,
            moTa: moTa,
            soLuongTon: soLuongTon,
            giaNhap: giaNhap,
            giaBan: giaBan,
            trangThai: "1",
            hinhAnh1: hinhAnh1,
            hinhAnh2: hinhAnh2,
            hinhAnh3: hinhAnh3,
          }),
        },
      ).then((res) => {
        console.log("test response: ", res);
        resetState();
        setRefkey(1);
      });
    } else {
      console.log("not do post");
    }
  }

  function fillUpCBO() {
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/mau-sac/index",
    )
      .then((res) => res.json())
      .then((data) => {
        setLstMauSac(data);
        setIsLoadingLstMauSac(false);
        console.log("data lst mau sac :", data);
      });

    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/kich-thuoc/index",
    )
      .then((res) => res.json())
      .then((data) => {
        setLstKichThuoc(data);
        setIsLoadingLstKichThuoc(false);
        console.log("data kich thuoc:", data);
      });

    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chat-lieu/index",
    )
      .then((res) => res.json())
      .then((data) => {
        setLstChatLieu(data);
        setIsLoadingLstChatLieu(false);
        console.log("data chat lieu:", data);
      });
  }

  useEffect(() => {
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/san-pham/detail/" +
        params.id,
    )
      .then((res) => res.json())
      .then((data) => {
        setDataSanPham(data);
        setIsLoading(false);
        console.log("data sp:", data);
      });
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-sp/detail-byidsp/" +
        params.id +
        "?page=" +
        currentPage,
    )
      .then((res) => res.json())
      .then((data) => {
        setDataSPCT(data);
        setIsLoadingSPCT(false);
        setRefkey(0);
        console.log("data spct:", data);
      });
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-sp/count-byidsp/" +
        params.id,
    )
      .then((res) => res.json())
      .then((data) => {
        setLastPage(Math.ceil(data / 20));
        console.log("data:", Math.ceil(data / 20));
      });
    fillUpCBO();
  }, [refKey, currentPage]);
  return (
    <div className="ms-2 bg-white">
      <h2>this is the admin san pham page</h2>
      <Navbarx />
      {!isLoading ? (
        <div className="z-0 w-full bg-white">
          <div className="flex flex-row-reverse">
            <Button
              className="me-5"
              gradientMonochrome="info"
              onClick={() => setOpenModalAdd(true)}
            >
              <HiFolderAdd size={20} />
              Thêm
            </Button>
          </div>

          <div className="ms-5">
            <h2 className="font-semibold">
              Sản phẩm: {dataSanPham.ten}-{dataSanPham.ma}
            </h2>
            <div className="flex-cols mt-5 flex w-screen">
              <h2 className="flex w-1/12 items-center text-xs font-semibold">
                STT
              </h2>
              <h2 className="flex w-1/12 items-center text-xs font-semibold">
                Chất liệu
              </h2>
              <h2 className="ms-[20px] flex w-1/12 items-center text-xs font-semibold">
                Màu sắc
              </h2>
              <h2 className="ms-[20px] flex w-1/12 items-center text-xs font-semibold">
                Kích thước
              </h2>
              <h2 className="ms-[20px] flex w-1/12 items-center text-xs font-semibold">
                SL
              </h2>
              <h2 className="flex w-1/12  items-center text-xs font-semibold">
                Status
              </h2>
            </div>
            <div className="mt-5 space-y-5">
              {!isLoadingSPCT && !isLoadingLstKichThuoc && !isLoadingLstMauSac
                ? dataSPCT.map((spctLocal, i) => (
                    <div className="flex-cols flex">
                      <div className="flex w-8/12 items-center border-b-2">
                        <CellSPCTMobile
                          key={i}
                          spct={spctLocal}
                          lstKichThuoc={lstKichThuoc}
                          lstMauSac={lstMauSac}
                          indx={i}
                        />
                      </div>
                      <div className="flex items-center border-b-2">
                        <Button
                          className="ms-3 flex h-[30px] items-center"
                          onClick={() => {
                            setOpenModalEdit(true), onOpenModalEdit(spctLocal);
                          }}
                        >
                          Sửa
                        </Button>
                      </div>
                    </div>
                  ))
                : "Không có dữ liệu"}
            </div>
          </div>
          {/* modal add start */}
          <Modal
            className="w-screen "
            show={openModalAdd}
            onClose={onCloseModalAdd}
            popup
          >
            <Modal.Header />
            <Modal.Body className="overflow-auto">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Nhập sản phẩm chi tiết
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ma" value="Tên sản phẩm" />
                  </div>
                  <TextInput
                    id="idSP"
                    placeholder=""
                    value={dataSanPham.ten + " " + dataSanPham.ma}
                    readOnly
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="mauSac" value="Màu sắc" />
                  </div>
                  <div className="flex-cols flex gap-5">
                    <Dropdown
                      label={mauSac ? mauSac.ten : "Màu sắc"}
                      dismissOnClick={false}
                      style={{ width: "180px" }}
                    >
                      {!isLoadingLstMauSac ? (
                        lstMauSac.map((ms) => (
                          <Dropdown.Item
                            key={ms.id}
                            value={ms}
                            onClick={() => setMauSac(ms)}
                          >
                            {ms.ten}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item>Không có dữ liệu</Dropdown.Item>
                      )}
                    </Dropdown>
                    <Button onClick={()=>{setOpenModalAddCbo(true)}}>Thêm</Button>
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="kichThuoc" value="Kích thước" />
                  </div>
                  <div className="flex-cols flex gap-5">
                    <Dropdown
                      label={kichThuoc ? kichThuoc.ten : "Kích thước"}
                      dismissOnClick={false}
                      style={{ width: "180px" }}
                    >
                      {!isLoadingLstKichThuoc ? (
                        lstKichThuoc.map((kt) => (
                          <Dropdown.Item
                            key={kt.id}
                            value={kt}
                            onClick={() => setKichThuoc(kt)}
                          >
                            {kt.ten}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item>Không có dữ liệu</Dropdown.Item>
                      )}
                    </Dropdown>
                    <Button onClick={()=>{setOpenModalAddCbo(true)}}>Thêm</Button>
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="idKichThuoc" value="Chất liệu" />
                  </div>
                  <div className="flex-cols flex gap-5">
                    <Dropdown
                      label={chatLieu ? chatLieu.ten : "Kích thước"}
                      dismissOnClick={false}
                      style={{ width: "180px" }}
                    >
                      {!isLoadingLstChatLieu ? (
                        lstChatLieu.map((cl) => (
                          <Dropdown.Item
                            key={cl.id}
                            value={cl}
                            onClick={() => setChatLieu(cl)}
                          >
                            {cl.ten}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item>Không có dữ liệu</Dropdown.Item>
                      )}
                    </Dropdown>
                    <Button onClick={()=>{setOpenModalAddCbo(true)}}>Thêm</Button>
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="namBH" value="Năm bảo hành" />
                  </div>
                  <TextInput
                    id="namBH"
                    value={namBH}
                    onChange={() => setNamBH(event.target.value)}
                    required
                  />
                  {!validatorNull(namBH) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="moTa" value="Mô tả" />
                  </div>
                  <TextInput
                    id="moTa"
                    value={moTa}
                    onChange={() => setMoTa(event.target.value)}
                    required
                  />
                  {!validatorNull(moTa) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="soLuongTon" value="Số lượng tồn" />
                  </div>
                  <TextInput
                    id="soLuongTon"
                    value={soLuongTon}
                    onChange={() => setSoLuongTon(event.target.value)}
                    required
                  />
                  {!validatorNull(soLuongTon) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="giaNhap" value="Giá nhập" />
                  </div>
                  <TextInput
                    id="giaNhap"
                    value={giaNhap}
                    onChange={() => setGiaNhap(event.target.value)}
                    required
                  />
                  {!validatorNull(giaNhap) ? (
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
                    <Label htmlFor="hinhAnh1add" value="Link hình ảnh 1" />
                  </div>
                  <TextInput id="hinhAnh1add" value={hinhAnh1} required />
                  {!validatorNull(hinhAnh1) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="hinhAnh2add" value="Link hình ảnh 2" />
                  </div>
                  <TextInput id="hinhAnh2add" value={hinhAnh2} required />
                  {!validatorNull(hinhAnh2) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="hinhAnh3add" value="Link hình ảnh 3" />
                  </div>
                  <TextInput id="hinhAnh3add" value={hinhAnh3} required />
                  {!validatorNull(hinhAnh3) ? (
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
                  <Button onClick={() => addSPCT()}>Lưu sản phẩm</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          {/* modal add end */}
          {/* modal edit start */}
          <Modal
            show={openModalEdit}
            className="w-screen"
            onClose={onCloseModalEdit}
            popup
          >
            <Modal.Header />
            <Modal.Body className="overflow-auto">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Chỉnh sửa sản phẩm chi tiết
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="ma"
                      value="Mã sản phẩm(fix server tự tăng)"
                    />
                  </div>
                  <TextInput
                    id="sp"
                    placeholder=""
                    value={sp.ten + " " + sp.ma}
                    readOnly
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="mauSac" value="Màu sắc" />
                  </div>
                  <div className="flex-cols flex gap-5">
                    <Dropdown
                      label={mauSac ? mauSac.ten : "Màu sắc"}
                      dismissOnClick={false}
                      style={{ width: "180px" }}
                    >
                      {!isLoadingLstMauSac ? (
                        lstMauSac.map((ms) => (
                          <Dropdown.Item
                            key={ms.id}
                            value={ms}
                            onClick={() => setMauSac(ms)}
                          >
                            {ms.ten}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item>Không có dữ liệu</Dropdown.Item>
                      )}
                    </Dropdown>
                    <Button onClick={()=>{setOpenModalAddCbo(true)}}>Thêm</Button>
                  </div>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="kichThuoc" value="Kích thước" />
                  </div>
                  <div className="flex-cols flex gap-5">
                    <Dropdown
                      label={kichThuoc ? kichThuoc.ten : "Kích thước"}
                      dismissOnClick={false}
                      style={{ width: "180px" }}
                    >
                      {!isLoadingLstKichThuoc ? (
                        lstKichThuoc.map((kt) => (
                          <Dropdown.Item
                            key={kt.id}
                            value={kt}
                            onClick={() => setKichThuoc(kt)}
                          >
                            {kt.ten}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item>Không có dữ liệu</Dropdown.Item>
                      )}
                    </Dropdown>
                    <Button onClick={()=>{setOpenModalAddCbo(true)}}>Thêm</Button>
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="idChatLieu" value="Chất liệu" />
                  </div>
                  <div className="flex-cols flex gap-5">
                    <Dropdown
                      label={chatLieu ? chatLieu.ten : "Chất liệu"}
                      dismissOnClick={false}
                      style={{ width: "180px" }}
                    >
                      {!isLoadingLstChatLieu ? (
                        lstChatLieu.map((cl) => (
                          <Dropdown.Item
                            key={cl.id}
                            value={cl}
                            onClick={() => setChatLieu(cl)}
                          >
                            {cl.ten}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item>Không có dữ liệu</Dropdown.Item>
                      )}
                    </Dropdown>
                    <Button onClick={()=>{setOpenModalAddCbo(true)}}>Thêm</Button>
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="namBH" value="Năm bảo hành" />
                  </div>
                  <TextInput
                    id="namBH"
                    value={namBH}
                    onChange={() => setNamBH(event.target.value)}
                    required
                  />
                  {!validatorNull(namBH) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="moTa" value="Mô tả" />
                  </div>
                  <TextInput
                    id="moTa"
                    value={moTa}
                    onChange={() => setMoTa(event.target.value)}
                    required
                  />
                  {!validatorNull(moTa) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="soLuongTon" value="Số lượng tồn" />
                  </div>
                  <TextInput
                    id="soLuongTon"
                    value={soLuongTon}
                    onChange={() => setSoLuongTon(event.target.value)}
                    required
                  />
                  {!validatorNull(soLuongTon) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="giaNhap" value="Giá nhập" />
                  </div>
                  <TextInput
                    id="giaNhap"
                    value={giaNhap}
                    onChange={() => setGiaNhap(event.target.value)}
                    required
                  />
                  {!validatorNull(giaNhap) ? (
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
                    <Label htmlFor="ngayTao" value="Ngày tạo" />
                  </div>
                  <TextInput id="ngayTao" value={ngayTao} readOnly />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="hinhAnh1" value="Link hình ảnh 1" />
                  </div>
                  <TextInput id="hinhAnh1" value={hinhAnh1} required />
                  {!validatorNull(hinhAnh1) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="hinhAnh2" value="Link hình ảnh 2" />
                  </div>
                  <TextInput id="hinhAnh2" value={hinhAnh2} required />
                  {!validatorNull(hinhAnh2) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="hinhAnh3" value="Link hình ảnh 3" />
                  </div>
                  <TextInput id="hinhAnh3" value={hinhAnh3} required />
                  {!validatorNull(hinhAnh3) ? (
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
                  <Button
                    onClick={() => {
                      updateSPCT(idSPCT), onCloseModalEdit();
                    }}
                  >
                    Lưu sản phẩm
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          {/* end modal spct */}
          {/*start modal add cbo mau sac */}
          <Modal
            className="w-screen"
            show={openModalAddCbo}
            onClose={onCloseModalAddCbo}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Thêm mới
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Tên" />
                  </div>
                  <TextInput
                    id="ten"
                    // value={email}
                    // onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="w-full">
                  <Button>Lưu</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          {/* end modal add cbo */}
           {/*start modal add cbo kich thuoc*/}
           <Modal
            className="w-screen"
            show={openModalAddCbo}
            onClose={onCloseModalAddCbo}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Thêm mới
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Tên" />
                  </div>
                  <TextInput
                    id="ten"
                    // value={email}
                    // onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="w-full">
                  <Button>Lưu</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          {/* end modal add cbo */}
           {/*start modal add cbo chat lieu */}
           <Modal
            className="w-screen"
            show={openModalAddCbo}
            onClose={onCloseModalAddCbo}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Thêm mới
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Tên" />
                  </div>
                  <TextInput
                    id="ten"
                    // value={email}
                    // onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="w-full">
                  <Button>Lưu</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          {/* end modal add cbo */}
          <div className="ms-4 mt-5 flex overflow-x-auto sm:justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={lastPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      ) : (
        <Skeleton count={20} />
      )}
      <div className="mt-5">
        <Footerx />
      </div>
    </div>
  );
}
