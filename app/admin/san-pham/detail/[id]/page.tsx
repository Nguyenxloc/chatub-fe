"use client";
import { BrowserView, MobileView } from "react-device-detect";
import DetailSP from "../detailSP";
import DetailSPMobile from "../detailSPMobile";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Dropdown, Label, Modal, Pagination, TextInput, ToggleSwitch } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import Navbarx from "@/app/(dashboard)/component/navbarx";
export default function Page() {
  const params = useParams<{id:string}>();
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var todayNow = mm + "/" + dd + "/" + yyyy;
  var todayPost = yyyy + "-" + mm + "-" + dd;
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [dataSanPham, setDataSanPham] = useState(null);
  const [dataSPCT, setDataSPCT] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSPCT, setIsLoadingSPCT] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const [idSP, setIdSP] = useState("");
  const [mauSac, setMauSac] = useState("");
  const [kichThuoc, setKichThuoc] = useState("");
  const [idChatLieu, setIdChatLieu] = useState("");
  const [namBH, setNamBH] = useState("");
  const [moTa, setMoTa] = useState("");
  const [soLuongTon, setSoLuongTon] = useState("");
  const [giaNhap, setGiaNhap] = useState("");
  const [giaBan, setGiaBan] = useState("");
  const [ngayTao, setNgayTao] = useState("");
  const [trangThai, setTrangThai] = useState(false);
  const [lstMauSac, setLstMauSac] = useState();
  const [lstKichThuoc, setLstKichThuoc] = useState();
  const [lstChatLieu, setLstChatLieu] = useState();
  const [isLoadingLstMS, setIsLoadingLstMS] = useState(true);
  const [isLoadingLstKT, setIsLoadingLstKT] = useState(true);
  const [isLoadingLstCL, setIsLoadingLstCL] = useState(true);
  let validateOK = false;
  function onCloseModalAdd() {
    setOpenModalAdd(false);
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
            ngayTao: todayPost,
            trangThai: "0",
          }),
        },
      ).then((res) => console.log("test response: ", res));
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

    // fetch(
    //   "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chat-lieu/index",
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setLstChatLieu(data);
    //     setIsLoadingLstCL(true);
    //     console.log("data chat lieu:", data);
    //   });
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
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-sp/index",
    )
      .then((res) => res.json())
      .then((data) => {
        setDataSPCT(data);
        setIsLoadingSPCT(false);
        console.log("data spct:", data);
      });
    fillUpCBO();
  }, []);
  return (
    <div>
      <BrowserView>
        <DetailSP idPara={params.id}/>
      </BrowserView>
      <MobileView>
        <DetailSPMobile id={params.id}/>
      </MobileView>
     </div>)}