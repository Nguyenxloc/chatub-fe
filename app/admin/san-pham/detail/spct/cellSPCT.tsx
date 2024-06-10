import { Button } from "flowbite-react";
import { useEffect, useState } from "react";

export default function CellSPCT({ idSP,isReload }) {
  // inital hooks useeffect
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  //spct hooks
  const [sp,setSP] = useState(null);
  const [mauSac,setMauSac] = useState(null); 
  const [kichThuoc,setKichThuoc] = useState(null);
  const [chatLieu,setChatLieu] = useState(null);
  const [namBH,setNamBH] = useState(null);
  const [moTa, setMoTa] = useState(null); 
  const [soLuong, setSoLuong] = useState(null);
  const [giaNhap, setGiaNhap] = useState(null);
  const [giaBan, setGiaBan] = useState(null);
  const [ngayTao, setNgayTao] = useState(Date);
  const [trangThai, setTrangThai] = useState(false);
  useEffect(() => {
    fetch(
      "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-sp/index",
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(true);
        console.log("data:", data);
      });
      if(isReload==true){
        fetch(
          "http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/chi-tiet-sp/index",
        )
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setIsLoading(true);
            console.log("data:", data);
          });
          console.log("do reload spct: ", isReload);
          isReload =false;
      }
  }, []);

  function getSPCT(idSPCT:String){
    
  }
  if (isLoading) {
    return (
      <div>
        <hr />
        <div className="flex-cols flex gap-5">
          <h2>STT</h2>
          <h2>Chất liệu</h2>
          <h2>Màu sắc</h2>
          <h2>Kích thước</h2>
          <h2>Số lượng</h2>
        </div>
        {data.map((spct, i) => (
          <div>
            <div className="flex-cols flex gap-5">
              <h2>{i}</h2>
              <h2>spct.chatLieu</h2>
              <h2>{spct.mauSac}</h2>
              <h2>{spct.kichThuoc}</h2>
              <h2>{spct.soLuong}</h2>
            </div>
            <div className="flex flex-row-reverse"> 
            <Button>Sửa</Button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
