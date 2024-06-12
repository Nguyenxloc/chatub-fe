import { Button, Dropdown, Label, Modal, TextInput, ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
export default function CellSPCT({ spct,indx,lstMauSac,lstKichThuoc }) {
  // inital hooks
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var todayNow = mm + "/" + dd + "/" + yyyy;
  var todayPost = yyyy+"-"+mm+"-"+dd;
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [sp, setSP] = useState(spct.sp);
  const [mauSac, setMauSac] = useState(spct.mauSac);
  const [kichThuoc, setKichThuoc] = useState(spct.kichThuoc);
  const [idChatLieu, setIdChatLieu] = useState("");
  const [namBH, setNamBH] = useState(spct.namBH);
  const [moTa, setMoTa] = useState(spct.moTa);
  const [soLuongTon, setSoLuongTon] = useState(spct.soLuongTon);
  const [giaNhap, setGiaNhap] = useState(spct.giaNhap);
  const [giaBan, setGiaBan] = useState(spct.giaBan);
  const [ngayTao, setNgayTao] = useState(spct.ngayTao);
  const [trangThai, setTrangThai] = useState(false);
  let validateOK = false;
  function onCloseModalEdit() {
    setOpenModalEdit(false);
  }
  function updateSPCT() {
    if (validateOK) {
      fetch(
        "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-sp/update/"+spct.id,
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
            ngayTao: todayPost,
            trangThai: "0",
          }),
        },
      ).then((res) => console.log("test response: ", res));
    } else {
      console.log("not do post");
    }
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
    return (
      <div>
        <hr />
        <div className="flex-cols flex gap-5">
          <h2>STT</h2>
          <h2>Chất liệu</h2>
          <h2>Màu sắc</h2>
          <h2>Kích thước</h2>
          <h2>Số lượng Tồn</h2>
          <h2>Trạng thái</h2>
        </div>
          <div>
            <div className="flex-cols flex gap-5">
              <h2>{indx+1}</h2>
              <h2>spct.chatLieu</h2>
              <h2>{spct.mauSac.ten}</h2>
              <h2>{spct.kichThuoc.ten}</h2>
              <h2 className="ms-[50px]">{spct.soLuongTon}</h2>
              <h2>{spct.trangThai}</h2>
            </div>
            <div className="flex flex-row-reverse"> 
            <Button onClick={()=>setOpenModalEdit(true)}>Sửa</Button>
            </div>
            <hr />
          </div>
                    {/* modal edit start */}
                    <Modal show={openModalEdit} size="xl" onClose={onCloseModalEdit} popup>
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
                    value={spct.sp.ten + " " + spct.sp.ma}
                    readOnly
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="mauSac" value="Màu sắc" />
                  </div>
                  <Dropdown
                    label={mauSac ? mauSac.ten : 'Chọn màu sắc'}
                    dismissOnClick={false}
                  >
                    {
                      lstMauSac.map((ms) => (
                        <Dropdown.Item key={ms.id} value={ms} onClick={() => setMauSac(ms)}>
                          {ms.ten}
                        </Dropdown.Item>
                      ))
                    }
                  </Dropdown>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="kichThuoc" value="Kích thước" />
                  </div>
                  <Dropdown
                    label={kichThuoc ? kichThuoc.ten : 'Chọn kích thước'}
                    dismissOnClick={false}
                  >
                    {
                      lstKichThuoc.map((kt) => (
                        <Dropdown.Item key={kt.id} value={kt} onClick={() => setKichThuoc(kt)}>{kt.ten}</Dropdown.Item>
                      ))
                    }
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
                  <Button onClick={() => updateSPCT()}>Lưu sản phẩm</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          {/* end modal spct */}
      </div>
    );
}
