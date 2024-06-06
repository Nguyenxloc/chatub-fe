import { Footerx } from "@/app/(dashboard)/component/footer";
import Navbarx from "@/app/(dashboard)/component/navbarx";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  Table,
  TextInput,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { HiFolderAdd } from "react-icons/hi";
export default function SanPham() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
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
  if (isLoading == false) {
    return (
      <div className="ms-2">
        <h2>this is the admin san pham page</h2>
        <Navbarx />
        <div className="z-0 w-full bg-white">
          <Table>
            <Table.Head>
              <Table.HeadCell colSpan={1}>Stt</Table.HeadCell>
              <Table.HeadCell colSpan={1}>Hình ảnh</Table.HeadCell>
              <Table.HeadCell colSpan={1}>Mã</Table.HeadCell>
              <Table.HeadCell colSpan={1}>Tên</Table.HeadCell>
              <Table.HeadCell colSpan={1}>Ngày tạo</Table.HeadCell>
              <Table.HeadCell colSpan={1}>Giá bán</Table.HeadCell>
              <Table.HeadCell colSpan={1}>Hành động</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data.map((sp, i) => (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell colSpan={1}>1</Table.Cell>
                  <Table.Cell colSpan={1}>
                    <img className="h-30 w-20" src={sp.hinhAnh} alt="" />
                  </Table.Cell>
                  <Table.Cell colSpan={1}>{sp.ma}</Table.Cell>
                  <Table.Cell
                    colSpan={1}
                    className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                  >
                    {sp.ten}
                  </Table.Cell>
                  <Table.Cell colSpan={1}>{sp.ngayTao}</Table.Cell>
                  <Table.Cell colSpan={1}>{sp.giaBan}</Table.Cell>
                  <Table.Cell colSpan={1}>
                    <div>
                      <Button
                        gradientMonochrome="success"
                        onClick={() => setOpenModal(true)}
                      >
                        <HiFolderAdd size={20} /> Sửa
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                  </div>
                  <TextInput id="password" type="password" required />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <div className="w-full">
                  <Button>Log in to your account</Button>
                </div>
                <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?&nbsp;
                  <a
                    href="#"
                    className="text-cyan-700 hover:underline dark:text-cyan-500"
                  >
                    Create account
                  </a>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <div className="me-[115px] flex flex-row-reverse">
            <Button
              gradientMonochrome="info"
              onClick={() => setOpenModal(true)}
            >
              <HiFolderAdd size={20} />
              Thêm sản phẩm
            </Button>
          </div>
        </div>
        <div className="mt-5">
          <Footerx />
        </div>
      </div>
    );
  }
}
