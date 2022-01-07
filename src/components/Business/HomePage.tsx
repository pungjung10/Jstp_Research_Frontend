import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import OrderCard from "./card/OrderedCard";
import mockData from "../mockData/Business/mockOrderData";

const HomePage: React.FC = () => {
  let navigate = useNavigate();
  const changePage = (path: string): void => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center mt-5 w-full">
      <Button
        color={"green-500"}
        colorHover={"white"}
        font={"bold"}
        textSize={"lg"}
        colorText={"white"}
        colorTextHover={"green-500"}
        widthNormal={"64"}
        widthMobile={"4/5"}
        radius={"full"}
        onClick={() => changePage("order")}
      >
        Create new order
      </Button>
      <div className="flex flex-col items-center md:grid grid-cols-5 w-full mt-5">
        <div className="md:col-start-2 md:col-end-5 w-4/5 md:w-full">
          My orders
          {mockData.map((order) => (
            <div className="pt-3" key={order.id}>
              <OrderCard {...order} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
