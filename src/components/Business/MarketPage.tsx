import React from "react";

import mockShopData from "../mockData/Business/mockShopData";
import ShopCard from "./card/ShopCard";

const MarketPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-5 w-full">
      <div className="flex flex-col items-center md:grid grid-cols-5 w-full mt-5">
        <div className="md:col-start-2 md:col-end-5 w-4/5 md:w-full">
          <input
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Search"
          />
          {mockShopData.map((shop) => (
            <div className="pt-5" key={shop.id}>
              <ShopCard {...shop} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
