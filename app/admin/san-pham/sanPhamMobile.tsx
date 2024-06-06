import { Footerx } from "@/app/(dashboard)/component/footer";
import Navbarx from "@/app/(dashboard)/component/navbarx";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiFolderAdd } from "react-icons/hi";
import CellSanPham from "./cellSanPham";
export default function SanPhamMobile() {
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
      <div className="ms-1">
        <h2>this is the admin san pham page</h2>
        <Navbarx />
        <div className="z-0 w-full bg-white">
          <Button gradientMonochrome="info" onClick={() => setOpenModal(true)}>
            <HiFolderAdd size={20} />
            Thêm sản phẩm
          </Button>
          <div className="grid grid-cols-1 grid-rows-3 gap-4">
            {data.map((sp, i) => (
              <CellSanPham cellSanPham={sp} />
            ))}
          </div>
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
          <div className="me-[115px] flex flex-row-reverse"></div>
        </div>
        <div className="mt-5">
          <Footerx />
        </div>
      </div>
    );
  }
}
