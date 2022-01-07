import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MdAdd } from "react-icons/md";
import NewOrderCard from "./card/NewOrderCard";

const OrderPage: React.FC = () => {
  const [ordersNumber, setOrdersNumber] = useState(1);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endtDate, setEndDate] = useState<Date | null>(new Date());

  const addOrder = () => {
    const add = ordersNumber + 1;
    setOrdersNumber(add);
  };

  return (
    <div className="flex flex-col items-center md:grid grid-cols-5 w-full mt-5">
      <div className="md:col-start-2 md:col-end-5 w-4/5 md:w-full text-gray-500">
        <div className="bg-white w-full rounded-2xl">
          <div className="py-3 px-5 pt-4 ">
            <p className="text-xl font-bold">ช่วงเวลาที่ต้องการ</p>
          </div>
          <div className="p-4">
            <p>วันที่เริ่ม</p>
            <DatePicker
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
            />
          </div>
          <div className="p-4 pb-5">
            <p>วันที่สิ้นสุด</p>
            <DatePicker
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              selected={endtDate}
              onChange={(date: Date | null) => setEndDate(date)}
            />
          </div>
        </div>

        <div>
          {Array.from(Array(ordersNumber), () => {
            return <NewOrderCard />;
          })}
        </div>

        <div className="flex flex-row justify-end">
          <button
            className="bg-yellow-500 hover:bg-white text-2xl text-white hover:text-yellow-500 font-bold py-1 px-4 w-16 rounded-xl ease-in-out duration-300 mt-3"
            onClick={() => addOrder()}
          >
            <p className="flex flex-col justify-center items-center w-full h-full ">
              <MdAdd />
            </p>
          </button>
        </div>

        <div className="flex flex-row justify-center py-3">
          <button
            className="bg-green-500 hover:bg-white text-lg text-white hover:text-green-500 font-bold py-2 px-4 w-full md:w-64 rounded-full ease-in-out duration-300"
            // onClick={() => changePage("order")}
          >
            <p className="flex flex-col justify-center items-center w-full h-full ">
              Confirm order
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
