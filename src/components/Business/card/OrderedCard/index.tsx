import React from "react";

import Order from "./Order";
import { orderedCard } from "../../types";

const OrderedCard: React.FC<orderedCard> = ({ id, date, orders }) => {
  return (
    <div className="bg-white w-full rounded-2xl">
      <div className="py-3 px-5 text-gray-500 ">
        <div className="text-xl font-bold">{`Order number #${id}`}</div>
        <div>{`Date : ${date}`}</div>
        <div className="mt-2">detail :</div>
        <div className="ml-2 md:ml-10">
          <div className="grid grid-cols-3">
            <div>ชื่อ</div>
            <div>บาท/ก.ก.</div>
            <div>ก.ก./สัปดาห์</div>
          </div>
          {orders.map((item) => (
            <Order {...item} key={item.name + item.amount} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderedCard;
