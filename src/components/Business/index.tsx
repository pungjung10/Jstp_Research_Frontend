import React from "react";

import MenuButton from "./MenuButton";
import HomePage from "./HomePage";
import MarketPage from "./MarketPage";
import OrderPage from './OrderPage';

import { Route, Routes } from "react-router-dom";

const Business: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <MenuButton />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/market/order" element={<OrderPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Business;
