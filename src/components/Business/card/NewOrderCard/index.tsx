import React from 'react';

const NewOrderCard: React.FC = () => {
    return(
        <div className="bg-white w-full rounded-2xl mt-5">
          <div className="py-3 px-5 pt-4 ">
            <p className="text-xl font-bold">รายการ</p>
          </div>
          <div className="p-4">
            <p>ชื่อ</p>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="p-4 pb-5">
            <p>ปริมาณที่ต้องการการ(ก.ก.)/สัปดาห์</p>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Amount"
            />
          </div>
        </div>
    )
}

export default NewOrderCard;