import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../Button/Button";
import { shopCard } from "../../types";
import Product from "./Product";

const ShopCard: React.FC<shopCard> = ({ name, products }) => {
  let navigate = useNavigate();
  const changePage = (path: string): void => {
    navigate(path);
  };

  return (
    <div className="bg-white w-full rounded-2xl">
      <div className="py-3 px-5 text-gray-500 ">
        <p className="text-xl font-bold">{`${name}`}</p>
        <div className="mt-2">Product :</div>
        <div className="ml-2 md:ml-10">
          <div className="grid grid-cols-2">
            <div>ชื่อ</div>
            <div>บาท/ก.ก.</div>
          </div>
          {products.map((product) => (
            <Product {...product} key={product.name} />
          ))}
        </div>
        <div className="flex flex-row justify-center pt-4">
          <Button
            color={"green-500"}
            colorHover={"white"}
            font={"bold"}
            textSize={"sm"}
            colorText={"white"}
            colorTextHover={"green-500"}
            widthNormal={"32"}
            widthMobile={"full"}
            radius={"xl"}
            onClick={() => changePage("order")}
          >
            Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
