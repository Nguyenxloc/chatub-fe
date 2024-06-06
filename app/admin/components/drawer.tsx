import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Sidebar } from "flowbite-react";
import React from "react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiMenu,
  HiShoppingBag,
  HiTable,
  HiTruck,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
export function DrawerComp() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="z-10">
      <React.Fragment>
        <Button color="white" onClick={openDrawer}>
          <HiMenu />
        </Button>
        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Admin management
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <Typography
            color="gray"
            className="mb-8 pr-4 font-normal"
          ></Typography>
          <div className="flex flex-col gap-[5px]">
            <Sidebar aria-label="Sidebar with content separator example">
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={HiShoppingBag}>
                    Quản lý sản phẩm
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiUser}>
                    Quản lý khách hàng
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiUser}>
                    Quản lý nhân viên
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiTruck}>
                    Quản lý giao hàng
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiShoppingBag}>
                    Pending....
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiArrowSmRight}>
                    Pending....
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiTable}>
                    Pending....
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={HiChartPie}>
                    Pending....
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiViewBoards}>
                    Pending....
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={BiBuoy}>
                    Pending....
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
