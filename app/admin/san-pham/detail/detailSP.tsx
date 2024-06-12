import { Footerx } from "@/app/(dashboard)/component/footer";
import Navbarx from "@/app/(dashboard)/component/navbarx";
import {
  Button,
  Dropdown,
  Label,
  Modal,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HiCheckCircle, HiFolderAdd } from "react-icons/hi";
import CellSPCTBrowser from "./spct/cellSPCTBowser";
export default function DetailSP({ id }) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var todayNow = mm + "/" + dd + "/" + yyyy;
  var todayPost = yyyy + "-" + mm + "-" + dd;
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [dataSanPham, setDataSanPham] = useState(null);
  const [dataSPCT, setDataSPCT] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSPCT, setIsLoadingSPCT] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [idSP, setIdSP] = useState("");
  const [mauSac, setMauSac] = useState("");
  const [kichThuoc, setKichThuoc] = useState("");
  const [idChatLieu, setIdChatLieu] = useState("");
  const [namBH, setNamBH] = useState("");
  const [moTa, setMoTa] = useState("");
  const [soLuongTon, setSoLuongTon] = useState("");
  const [giaNhap, setGiaNhap] = useState("");
  const [giaBan, setGiaBan] = useState("");
  const [ngayTao, setNgayTao] = useState("");
  const [trangThai, setTrangThai] = useState(false);
  const [lstMauSac, setLstMauSac] = useState();
  const [lstKichThuoc, setLstKichThuoc] = useState();
  const [lstChatLieu, setLstChatLieu] = useState();
  const [isLoadingLstMS, setIsLoadingLstMS] = useState(true);
  const [isLoadingLstKT, setIsLoadingLstKT] = useState(true);
  const [isLoadingLstCL, setIsLoadingLstCL] = useState(true);
  const onPageChange = (page: number) => setCurrentPage(page);
  let validateOK = false;
  function onCloseModalAdd() {
    setOpenModalAdd(false);
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
            ngayTao: todayPost,
            trangThai: "0",
          }),
        },
      ).then((res) => console.log("test response: ", res));
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
        setIsLoadingLstMS(false);
        console.log("data lst mau sac :", data);
      });

    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/kich-thuoc/index",
    )
      .then((res) => res.json())
      .then((data) => {
        setLstKichThuoc(data);
        setIsLoadingLstKT(false);
        console.log("data kich thuoc:", data);
      });

    // fetch(
    //   "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chat-lieu/index",
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setLstChatLieu(data);
    //     setIsLoadingLstCL(true);
    //     console.log("data chat lieu:", data);
    //   });
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
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-sp/index",
    )
      .then((res) => res.json())
      .then((data) => {
        setDataSPCT(data);
        setIsLoadingSPCT(false);
        console.log("data spct:", data);
      });
    fillUpCBO();
  }, []);
  if (!isLoading) {
    return (
      <div className="ms-2">
        <h2>this is the admin san pham page</h2>
        <Navbarx />
        <div className="z-0 w-full bg-white">
          <div>
            <h2>
              Sản phẩm: {dataSanPham.ma} {dataSanPham.ten}
            </h2>
          </div>
          {/* modal add start */}
          <Modal show={openModalAdd} size="xl" onClose={onCloseModalAdd} popup>
            <Modal.Header />
            <Modal.Body className="overflow-auto">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Nhập sản phẩm chi tiết
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="ma"
                      value="Mã sản phẩm(fix server tự tăng)"
                    />
                  </div>
                  <TextInput
                    id="idSP"
                    placeholder=""
                    value={dataSanPham.ten + " " + dataSanPham.ma}
                    readOnly
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="mauSac" value="Màu sắc" />
                  </div>
                  <Dropdown
                    label={mauSac ? mauSac.ten : "Chọn màu sắc"}
                    dismissOnClick={false}
                  >
                    {!isLoadingLstMS ? (
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
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="kichThuoc" value="Kích thước" />
                  </div>
                  <Dropdown
                    label={kichThuoc ? kichThuoc.ten : "Chọn kích thước"}
                    dismissOnClick={false}
                  >
                    {!isLoadingLstKT ? (
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
                </div>
                {/* <div>
                  <div className="mb-2 block">
                    <Label htmlFor="idKichThuoc" value="Kích thước" />
                  </div>
                  <Dropdown
                    label="Dropdown button"
                    value={idChatLieu}
                    onChange={() => setIdChatLieu(event.target.value)}
                    dismissOnClick={false}
                  >
                    {!isLoadingLstMS ? (
                      lstChatLieu.map((cl) => (
                        <Dropdown.Item>{cl.ten}</Dropdown.Item>
                      ))
                    ) : (
                      <Dropdown.Item>Không có dữ liệu</Dropdown.Item>
                    )}
                  </Dropdown>
                </div> */}
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
                  <TextInput id="ngayTao" value={todayNow} required readOnly />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="hinhAnh" value="Link Hình ảnh" />
                  </div>
                  <TextInput id="hinhAnh" value={"pending...."} required />
                  {!validatorNull("pending.....") ? (
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

          <div className="flex flex-row-reverse">
            <Button
              gradientMonochrome="info"
              onClick={() => setOpenModalAdd(true)}
            >
              <HiFolderAdd size={20} />
              Thêm sản phẩm
            </Button>
          </div>
          <div className="">
            {!isLoadingSPCT && !isLoadingLstKT && !isLoadingLstMS
              ? dataSPCT.map((spctLocal, i) => (
                  <CellSPCTBrowser
                    spct={spctLocal}
                    lstKichThuoc={lstKichThuoc}
                    lstMauSac={lstMauSac}
                    indx={i}
                  />
                ))
              : "Không có dữ liệu"}
          </div>
        </div>
        <div className="mt-5">
          <Footerx />
        </div>
      </div>
    );
  }
}
