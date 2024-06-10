import { Footerx } from "@/app/(dashboard)/component/footer";
import Navbarx from "@/app/(dashboard)/component/navbarx";
import { Button, Label, Modal, TextInput, ToggleSwitch } from "flowbite-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HiCheckCircle, HiFolderAdd } from "react-icons/hi";
import CellSPCT from "./spct/cellSPCT";
export default function DetailSPMobile({ id }) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var todayNow = mm + "/" + dd + "/" + yyyy;
  const [openModal, setOpenModal] = useState(false);
  const [dataSanPham, setDataSanPham] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isReloadSPCT, setIsReloadSPCT] = useState(false);
  const [idSP,setIdSP] = useState("");
  const [idMauSac,setIdMauSac] = useState("");
  const [idKichThuoc,setIdKichThuoc] = useState("");
  const [namBH,setNamBH] = useState("");
  const [moTa,setMoTa] = useState("");
  const [soLuongTon,setSoLuongTon]  = useState(""); 
  const [giaNhap,setGiaNhap] = useState("");
  const [giaBan,setGiaBan] = useState("");
  const [ngayTao,setNgayTao] = useState("");
  const [trangThai,setTrangThai] = useState(false);
  const onPageChange = (page: number) => setCurrentPage(page);
  let validateOK = false;
  function onCloseModal() {
    setOpenModal(false);
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
     fetch("http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-sp/save", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idSp: idSP,
          idMauSac: idMauSac,
          idKichThuoc: idKichThuoc,
          namBH: namBH,
          moTa: moTa,
          soLuongTon: soLuongTon,
          giaNhap: giaNhap,
          giaBan: giaBan,
          ngayTao: todayNow,
          trangThai:"0"
        }),
      }).then(res=>console.log("test response: ", res.ok));
      setIsReloadSPCT(true);
    } else {
      console.log("not do post");
    }
  }
  useEffect(() => {
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/san-pham/detail/" +
        params.id,
    )
      .then((res) => res.json())
      .then((data) => {
        setDataSanPham(data);
        setIsLoading(true);
        console.log("data:", data);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="ms-2">
        <h2>this is the admin san pham page</h2>
        <Navbarx />
        <div className="z-0 w-full bg-white">
        <div>
            <h2>Sản phẩm: {dataSanPham.ma} {dataSanPham.ten}</h2>
        </div>
        <div> 
            <h2>Danh sách sản phẩm chi tiết</h2>
            <div className="flex flex-row-reverse">
            <Button onClick={()=>setOpenModal(true)}>Thêm</Button>
            </div>
            <CellSPCT idSP={dataSanPham.id} isReload={isReloadSPCT}/>
        </div>
          <Modal  show={openModal} size="xl" onClose={onCloseModal} popup>
              <Modal.Header />
              <Modal.Body className="overflow-auto">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Nhập sản phẩm chi tiết
                  </h3>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="ma" value="Mã sản phẩm(fix server tự tăng)" />
                    </div>
                    <TextInput
                      id="idSP"
                      placeholder=""
                      value={dataSanPham.ten +" "+ dataSanPham.ma}
                      onChange={(event) => setIdSP(event.target.value)}
                      readOnly
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="idMauSac" value="Màu sắc" />
                    </div>
                    <TextInput
                      id="idMauSac"
                      value={idMauSac}
                      onChange={() => setIdMauSac(event.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="idKichThuoc" value="Kích thước" />
                    </div>
                    <TextInput
                      id="idKichThuoc"
                      value={idMauSac}
                      onChange={() => setIdMauSac(event.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="namBH" value="Năm bảo hành" />
                    </div>
                    <TextInput
                      id="namBH"
                      value={idMauSac}
                      onChange={() => setIdMauSac(event.target.value)}
                      required
                    />
                    {!validatorNull(idMauSac) ? (
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
                      value={idMauSac}
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
                      value={giaNhap}
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
                    <TextInput
                      id="hinhAnh"
                      value={"pending...."}
                      required
                    />
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
        </div>
        <div className="mt-5">
          <Footerx />
        </div>
      </div>
    );
  }
}
