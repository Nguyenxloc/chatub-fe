import { useEffect, useState } from "react";
import CellProduct from "./cellProduct";

export default function Products() {
  const dataFake = [
    {
      id:"1",
      name: "Dây da apple watch",
      price: "840,000 VNĐ",
      code: "APL-01",
      description: "#",
      url: "https://www.o2leather.com/cdn/shop/files/0T0A0311.jpg?v=1694762071",
    },
    {
      id:2,
      name: "Dây da apple watch",
      price: "840,000 VNĐ",
      code: "APL-02",
      description: "#",
      url: "https://www.o2leather.com/cdn/shop/files/0T0A0311.jpg?v=1694762071",
    },
    {
      id:3,
      name: "Dây da apple watch",
      price: "840,000 VNĐ",
      code: "APL-03",
      description: "#",
      url: "https://www.o2leather.com/cdn/shop/files/0T0A0311.jpg?v=1694762071",
    },
    {
      id:4,
      name: "Dây da apple watch",
      price: "840,000 VNĐ",
      code: "APL-04",
      description: "#",
      url: "https://www.o2leather.com/cdn/shop/files/0T0A0311.jpg?v=1694762071",
    },
    {
      id:5,
      name: "Dây da apple watch",
      price: "840,000 VNĐ",
      code: "APL-05",
      description: "#",
      url: "https://www.o2leather.com/cdn/shop/files/0T0A0311.jpg?v=1694762071",
    },
    {
      id:6,
      name: "Dây da apple watch",
      price: "840,000 VNĐ",
      code: "APL-06",
      description: "#",
      url: "https://www.o2leather.com/cdn/shop/files/0T0A0311.jpg?v=1694762071",
    },
  ];
  const datars =[];
  const [data,setData] = useState(null);
  const[isLoading,setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch('http://ec2-54-179-249-209.ap-southeast-1.compute.amazonaws.com:8080/san-pham/index')
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      setIsLoading(false);
      console.log("data:",data);
    })
      // setData(rs);
      // console.log("test data hooks: ",data);
    
  }, []);
  if(isLoading==false){
    return (
      <div className="w-full">
        <h2 className="text-center text-2xl font-medium">Sản phẩm</h2>
        <div className="flex flex-wrap">
          {data.map((product, i) => (
            <div className="w-4/12">
              <CellProduct productCell={product} />
            </div>
          ))}
        </div>
      </div>
);
  }

}
