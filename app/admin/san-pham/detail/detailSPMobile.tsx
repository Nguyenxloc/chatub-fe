import { Footerx } from "@/app/(dashboard)/component/footer";
import Navbarx from "@/app/(dashboard)/component/navbarx";
import { Button, Label, TextInput, ToggleSwitch } from "flowbite-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HiFolderAdd } from "react-icons/hi";
export default function DetailSPMobile({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const [dataSanPham, setDataSanPham] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  let validateOK = false;
  function onCloseModal() {
    setOpenModal(true);
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
            
        </div>
          {/* <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
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
            </Modal> */}
        </div>
        <div className="mt-5">
          <Footerx />
        </div>
      </div>
    );
  }
}
