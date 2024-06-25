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
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HiCheckCircle, HiFolderAdd } from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CellKHCTMobile from "./khct/cellKHCTMobile";
export default function DetailKHMobile() {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalAddCboMauSac, setOpenModalAddCboMauSac] = useState(false);
  const [openModalAddCboKichThuoc, setOpenModalAddCboKichThuoc] =
    useState(false);
  const [openModalAddCboChatLieu, setOpenModalAddCboChatLieu] = useState(false);
  const [dataKhachHang, setDataKhachHang] = useState(null);
  const [dataKHCT, setDataKHCT] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingKHCT, setIsLoadingKHCT] = useState(true);
  const onPageChange = (page: number) => setCurrentPage(page);
  const [idKHCT, setIdKHCT] = useState("");
  const [kh, setKH] = useState("");
  const [mauSac, setMauSac] = useState("");
  const [kichThuoc, setKichThuoc] = useState("");
  const [chatLieu, setChatLieu] = useState("");
  const [mauSacTxt, setMauSacTxt] = useState("");
  const [kichThuocTxt, setKichThuocTxt] = useState("");
  const [chatLieuTxt, setChatLieuTxt] = useState("");
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
  const [refMauSac, setRefMauSac] = useState(0);
  const [refKichThuoc, setRefKichThuoc] = useState(0);
  const [refChatLieu, setRefChatLieu] = useState(0);
  const [refKH, setRefKH] = useState(0);
  const [lastPage, setLastPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  let validateOK = false;
  let validateMauSacOK = false;
  let validateKichThuocOK = false;
  let validateChatLieuOK = false;
  function onCloseModalAdd() {
    setOpenModalAdd(false);
  }
  function onCloseModalEdit() {
    setOpenModalEdit(false);
    resetState();
  }
  function onCloseModalAddCboMauSac() {
    setOpenModalAddCboMauSac(false);
    setMauSacTxt("");
  }
  function onCloseModalAddCboKichThuoc() {
    setOpenModalAddCboKichThuoc(false);
    setKichThuocTxt("");
  }
  function onCloseModalAddCboChatLieu() {
    setOpenModalAddCboChatLieu(false);
    setChatLieuTxt("");
  }
  function onOpenModalEdit(khct: object) {
    setIdKHCT(khct.id);
    setKH(khct.kh);
    setNamBH(khct.namBH);
    setMoTa(khct.moTa);
    setSoLuongTon(khct.soLuongTon);
    setGiaBan(khct.giaBan);
    setGiaNhap(khct.giaNhap);
    setNgayTao(khct.ngayTao);
    setTrangThai(khct.trangThai);
    setHinhAnh1(khct.hinhAnh1);
    setHinhAnh2(khct.hinhAnh2);
    setHinhAnh3(khct.hinhAnh3);
    setMauSac(khct.mauSac);
    setKichThuoc(khct.kichThuoc);
    setChatLieu(khct.chatLieu);
  }

  function resetState() {
    setIdKHCT("");
    setKH("");
    setMauSac("");
    setKichThuoc("");
    setChatLieu("");
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
  function validateMauSac(text: string) {
    if (text == "") {
      validateMauSacOK = false;
      return false;
    } else {
      validateMauSacOK = true;
      return true;
    }
  }

  function validateKichThuoc(text: string) {
    if (text == "") {
      validateKichThuocOK = false;
      return false;
    } else {
      validateKichThuocOK = true;
      return true;
    }
  }

  function validateChatLieu(text: string) {
    if (text == "") {
      validateChatLieuOK = false;
      return false;
    } else {
      validateChatLieuOK = true;
      return true;
    }
  }

  function addKHCT() {
    if (validateOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-kh/save",
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
            idChatLieu: chatLieu.id,
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
      ).then((res) => console.log("test rekhonse: ", res));
      setRefkey(1);
      setCurrentPage(lastPage);
      setOpenModalAdd(false);
    } else {
      console.log("not do post");
    }
  }

  function addMauSac() {
    if (validateMauSacOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/mau-sac/save",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ten: mauSacTxt,
            trangThai: "0",
          }),
        },
      ).then((res) => console.log("test rekhonse: ", res));
      setRefMauSac(1);
    } else {
      console.log("not do post");
    }
  }

  function addKichThuoc() {
    if (validateKichThuocOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/kich-thuoc/save",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ten: kichThuocTxt,
            trangThai: "0",
          }),
        },
      ).then((res) => console.log("test rekhonse: ", res));
      setRefKichThuoc(1);
    } else {
      console.log("not do post");
    }
  }

  function addChatLieu() {
    if (validateChatLieuOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chat-lieu/save",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ten: chatLieuTxt,
            trangThai: "0",
          }),
        },
      ).then((res) => console.log("test rekhonse: ", res));
      setRefChatLieu(1);
    } else {
      console.log("not do post");
    }
  }
  function updateKHCT(idparam: string) {
    if (validateOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-kh/update/" +
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
        console.log("test rekhonse: ", res);
        resetState();
        setRefkey(1);
        onCloseModalEdit();
        setOpenModalEdit(false);
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
    let isMounted = true;
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/san-pham/detail/" +
        params.id,
    )
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setDataKhachHang(data);
          setIsLoading(false);
          console.log("data kh:", data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [refKH]);

  useEffect(() => {
    let isMounted = true;
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-kh/detail-byidkh/" +
        params.id +
        "?page=" +
        currentPage,
    )
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setDataKHCT(data);
          setIsLoadingKHCT(false);
          setRefkey(0);
          console.log("data khct:", data);
        }
      });
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-kh/count-byidkh/" +
        params.id,
    )
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setLastPage(Math.ceil(data / 20));
          console.log("data:", Math.ceil(data / 20));
        }
      });
    return () => {
      isMounted = false;
    };
  }, [refKey, currentPage]);

  useEffect(() => {
    let isMounted = true;
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/mau-sac/index",
    )
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setLstMauSac(data);
          setIsLoadingLstMauSac(false);
          setRefMauSac(0);
          console.log("data lst mau sac :", data);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [refMauSac]);

  useEffect(() => {
    let isMounted = true;
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/kich-thuoc/index",
    )
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setLstKichThuoc(data);
          setIsLoadingLstKichThuoc(false);
          setRefKichThuoc(0);
          console.log("data kich thuoc:", data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [refKichThuoc]);

  useEffect(() => {
    let isMounted = true;
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chat-lieu/index",
    )
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setLstChatLieu(data);
          setIsLoadingLstChatLieu(false);
          setRefChatLieu(0);
          console.log("data chat lieu:", data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [refChatLieu]);

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
              Sản phẩm: {dataKhachHang.ten}-{dataKhachHang.ma}
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
            <div className="mt-5 khace-y-5">
              {!isLoadingKHCT && !isLoadingLstKichThuoc && !isLoadingLstMauSac
                ? dataKHCT.map((khctLocal, i) => (
                    <div className="flex-cols flex">
                      <div className="flex w-8/12 items-center border-b-2">
                        <CellKHCTMobile
                          key={i}
                          khct={khctLocal}
                          lstKichThuoc={lstKichThuoc}
                          lstMauSac={lstMauSac}
                          indx={i}
                        />
                      </div>
                      <div className="flex items-center border-b-2">
                        <Button
                          className="ms-3 flex h-[30px] items-center"
                          onClick={() => {
                            setOpenModalEdit(true), onOpenModalEdit(khctLocal);
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
              <div className="khace-y-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Nhập sản phẩm chi tiết
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ma" value="Tên sản phẩm" />
                  </div>
                  <TextInput
                    id="idKH"
                    placeholder=""
                    value={dataKhachHang.ten + " " + dataKhachHang.ma}
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
                    <Button
                      onClick={() => {
                        setOpenModalAddCboMauSac(true);
                      }}
                    >
                      Thêm
                    </Button>
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
                    <Button
                      onClick={() => {
                        setOpenModalAddCboKichThuoc(true);
                      }}
                    >
                      Thêm
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="idKichThuoc" value="Chất liệu" />
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
                    <Button
                      onClick={() => {
                        setOpenModalAddCboChatLieu(true);
                      }}
                    >
                      Thêm
                    </Button>
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
                  <div className="flex items-center justify-center">
                  <img className="h-[150px] w-[150px]" src={hinhAnh1} alt="" />
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <Label htmlFor="hinhAnh1add" value="Link hình ảnh 1" />
                  </div>
                  <TextInput id="hinhAnh1add" value={hinhAnh1} onChange={()=>{setHinhAnh1(event?.target.value)}} required />
                  {!validatorNull(hinhAnh1) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-center">
                  <img className="h-[150px] w-[150px]" src={hinhAnh2} alt="" />
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <Label htmlFor="hinhAnh2add" value="Link hình ảnh 2" />
                  </div>
                  <TextInput id="hinhAnh2add" value={hinhAnh2} onChange={()=>{setHinhAnh2(event?.target.value)}} required />
                  {!validatorNull(hinhAnh2) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-center">
                  <img className="h-[150px] w-[150px]" src={hinhAnh3} alt="" />
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <Label htmlFor="hinhAnh3add" value="Link hình ảnh 3" />
                  </div>
                  <TextInput id="hinhAnh3add" value={hinhAnh3} onChange={()=>{setHinhAnh3(event?.target.value)}} required />
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
                  <Button onClick={() => addKHCT()}>Lưu sản phẩm</Button>
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
              <div className="khace-y-2">
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
                    id="kh"
                    placeholder=""
                    value={kh.ten + " " + kh.ma}
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
                    <Button
                      onClick={() => {
                        setOpenModalAddCboMauSac(true);
                      }}
                    >
                      Thêm
                    </Button>
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
                    <Button
                      onClick={() => {
                        setOpenModalAddCboKichThuoc(true);
                      }}
                    >
                      Thêm
                    </Button>
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
                    <Button
                      onClick={() => {
                        setOpenModalAddCboChatLieu(true);
                      }}
                    >
                      Thêm
                    </Button>
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
                  <div className="flex items-center justify-center">
                  <img className="h-[150px] w-[150px]" src={hinhAnh1} alt="" />
                  </div>
                  <div className="flex items-center justify-center mb-2">
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
                  <div className="flex items-center justify-center">
                  <img className="h-[150px] w-[150px]" src={hinhAnh2} alt="" />
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <Label htmlFor="hinhAnh2edit" value="Link hình ảnh 2" />
                  </div>
                  <TextInput id="hinhAnh2edit" value={hinhAnh2} required />
                  {!validatorNull(hinhAnh2) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-center">
                  <img className="h-[150px] w-[150px]" src={hinhAnh3} alt="" />
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <Label htmlFor="hinhAnh3edit" value="Link hình ảnh 3" />
                  </div>
                  <TextInput id="hinhAnh3edit" value={hinhAnh3} required />
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
                      updateKHCT(idKHCT);
                    }}
                  >
                    Lưu sản phẩm
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          {/* end modal edit khct */}
          {/*start modal add cbo mau sac */}
          <Modal
            className="w-screen"
            show={openModalAddCboMauSac}
            onClose={onCloseModalAddCboMauSac}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="khace-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Thêm mới
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="mauSacTxt" value="Tên" />
                  </div>
                  <TextInput
                    id="mauSacTxt"
                    value={mauSacTxt}
                    onChange={(event) => setMauSacTxt(event.target.value)}
                    required
                  />
                  {!validateMauSac(mauSacTxt) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div className="w-full">
                  <Button onClick={() => addMauSac()}>Lưu</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          {/* end modal add cbo */}
          {/*start modal add cbo kich thuoc*/}
          <Modal
            className="w-screen"
            show={openModalAddCboKichThuoc}
            onClose={onCloseModalAddCboKichThuoc}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="khace-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Thêm mới
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="kichThuocTxt" value="Tên" />
                  </div>
                  <TextInput
                    id="kichThuocTxt"
                    value={kichThuocTxt}
                    onChange={(event) => setKichThuocTxt(event.target.value)}
                    required
                  />
                  {!validateKichThuoc(kichThuocTxt) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div className="w-full">
                  <Button onClick={() => addKichThuoc()}>Lưu</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          {/* end modal add cbo */}
          {/*start modal add cbo chat lieu */}
          <Modal
            className="w-screen"
            show={openModalAddCboChatLieu}
            onClose={onCloseModalAddCboChatLieu}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="khace-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Thêm mới
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="chatLieuTxt" value="Tên" />
                  </div>
                  <TextInput
                    id="chatLieuTxt"
                    value={chatLieuTxt}
                    onChange={(event) => setChatLieuTxt(event.target.value)}
                    required
                  />
                  {!validateChatLieu(chatLieuTxt) ? (
                    <p className="text-red-600">
                      Không để trống trường dữ liệu này
                    </p>
                  ) : (
                    <HiCheckCircle className="text-green-600 " />
                  )}
                </div>
                <div className="w-full">
                  <Button onClick={() => addChatLieu()}>Lưu</Button>
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
