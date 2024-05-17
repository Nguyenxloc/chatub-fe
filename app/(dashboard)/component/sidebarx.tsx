"use client";
import { Sidebar } from "flowbite-react";
import { NextPage } from "next";

export const Sidebarx: NextPage = function () {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#">TÚI ĐEO CHÉO</Sidebar.Item>
          <Sidebar.Item href="#">CẶP TÀI LIỆU/LAPTOP</Sidebar.Item>
          <Sidebar.Item href="#">BALO / TÚI TRỐNG</Sidebar.Item>
          <Sidebar.Item href="#">VÍ DA BÒ</Sidebar.Item>
          <Sidebar.Item href="#">THẮT LƯNG / PHỤ KIỆN</Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
