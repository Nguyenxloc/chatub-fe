"use client";
import { Footer } from "flowbite-react";
import { NextPage } from "next";
export const Footerx: NextPage = function () {
  return (
        <div className="w-full bg-white">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ms-[30px]">
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="GIỚI THIỆU" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">###########</Footer.Link>
                  <Footer.Link href="#">###########</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="Liên hệ" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">###########</Footer.Link>
                  <Footer.Link href="#">###########</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="KẾT NỐI VỚI CHÚNG TÔI" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">###########</Footer.Link>
                  <Footer.Link href="#">###########</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="NGUYENXLOC™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center"></div>
          </div>
        </div>
  );
};
