import React from "react";

const MenuButton: React.FC<HTMLButtonElement> = ({ children }) => {
  return (
    <button className="bg-white hover:bg-green-500 text-gray-400 hover:text-white font-bold py-2 px-4 rounded-full w-16 h-16 ease-in-out duration-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        {children}
      </div>
    </button >
  );
};

export default MenuButton;
