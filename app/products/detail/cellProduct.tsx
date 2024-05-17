import { NextPage } from "next";
export default function CellProduct ({productCell}) {
  return (
    <div>
      <div>
        <img
          className="w-[250px] h-[300px]"
          src={productCell.url}
          alt=""
        />
        <h2>{productCell.name}</h2>
        <p>{productCell.price}</p>
        <p>{productCell.description}</p>
      </div>
    </div>
  );
};
