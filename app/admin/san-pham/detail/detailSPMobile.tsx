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
import CellSPCTMobile from "./spct/cellSPCTMobile";
export default function DetailSPMobile({ id }) {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
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
  const [ChatLieu, setChatLieu] = useState("");
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
  const [isLoadingLstMS, setIsLoadingLstMS] = useState(true);
  const [isLoadingLstKT, setIsLoadingLstKT] = useState(true);
  const [isLoadingLstCL, setIsLoadingLstCL] = useState(true);
  const [refKey, setRefkey] = useState(0);
  const [lastPage, setLastPage] = useState(1);
  const [idspctHold, setIdspctHold] = useState("");
  let validateOK = false;
  function onCloseModalAdd() {
    setOpenModalAdd(false);
  }
  function onCloseModalEdit() {
    setOpenModalEdit(false);
  }
  function onOpenModalEdit(spct: object) {
    setIdSPCT(spct.id);
    setSP(spct.sp);
    setMauSac(spct.mauSac);
    setKichThuoc(spct.kichThuoc);
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
            hinhAnh1: "hinh anh 1",
            hinhAnh2: "hinh anh 2",
            hinhAnh3: "hinh anh 3 ",
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
            hinhAnh1: "hinh anh 1",
            hinhAnh2: "hinh anh 2",
            hinhAnh3: "hinh anh 3 ",
          }),
          
        },
      ).then((res) => {console.log("test response: ", res);resetState();setRefkey(1)});
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

    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chat-lieu/index",
    )
      .then((res) => res.json())
      .then((data) => {
        setLstChatLieu(data);
        setIsLoadingLstCL(true);
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
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-sp/count-byidsp/"+params.id,
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
          <div>
            <h2>
              Sản phẩm: {dataSanPham.ma} {dataSanPham.ten}
            </h2>
          </div>
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
            <div className="flex-cols mt-5 flex w-screen">
              <h2 className="flex w-1/12 items-center text-xs font-semibold">
                STT
              </h2>
              <h2 className="flex w-2/12 items-center text-xs font-semibold">
                Chất liệu
              </h2>
              <h2 className="flex w-2/12 items-center text-xs font-semibold">
                Màu sắc
              </h2>
              <h2 className="flex w-2/12 items-center text-xs font-semibold">
                Kích thước
              </h2>
              <h2 className="flex w-1/12 items-center text-xs font-semibold">
                SL
              </h2>
              <h2 className="flex w-2/12 items-center text-xs font-semibold">
                Trạng thái
              </h2>
            </div>
            <div className="mt-5 space-y-5">
              {!isLoadingSPCT && !isLoadingLstKT && !isLoadingLstMS
                ? dataSPCT.map((spctLocal, i) => (
                    <div className="flex-cols flex">
                      <div className="w-10/12 border-b-2 flex items-center">
                      <CellSPCTMobile
                        key={i}
                        spct={spctLocal}
                        lstKichThuoc={lstKichThuoc}
                        lstMauSac={lstMauSac}
                        indx={i}
                      />                        
                      </div>
                      <div className="flex items-center">
                      <Button  className="h-[30px] flex items-center" onClick={()=>{setOpenModalEdit(true),onOpenModalEdit(spctLocal)}}>Sửa</Button>  
                      </div>
                    </div>
                  ))
                : "Không có dữ liệu"}
            </div>
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
          {/* modal edit start */}
          <Modal
            show={openModalEdit}
            size="xl"
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
                    value={sp.ten + " " +sp.ma}
                    readOnly
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
                  <TextInput id="ngayTao" value={ngayTao} readOnly />
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
                  <Button onClick={() => {updateSPCT(idSPCT), onCloseModalEdit()}}>
                    Lưu sản phẩm
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          {/* end modal spct */}
          <div className="flex overflow-x-auto sm:justify-center">
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
