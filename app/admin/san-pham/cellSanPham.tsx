import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function CellSanPham({ cellSanPham }) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  return (
    <div
      // onClick={() => router.push("/products/detail/" + cellSanPham.id)}
      className="mt-5 w-[400px]"
    >
      <div
        className="relative w-[420px] overflow-hidden border bg-cover bg-no-repeat"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
      </div>
      <a>
        <div className="flex flex-cols gap-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">STT: </h5>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Mã: </h5>
        </div>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Tên: {cellSanPham.ten}
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {cellSanPham.giaBan}
        </span>
        <a
          onClick={()=>setOpenModal(true)}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Sửa
        </a>
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
    </div>
  );
}
