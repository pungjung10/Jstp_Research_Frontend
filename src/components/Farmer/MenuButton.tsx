import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import { MdContentPaste, MdPeople, MdDateRange } from "react-icons/md";

const MenuButton: React.FC = () => {
  let navigate = useNavigate();

  const iconSize = 32;

  const changePage = (path: string): void => {
    navigate(path);
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col justify-center items-center px-5">
        <Button
          color={"white"}
          colorHover={"green-500"}
          font={"bold"}
          textSize={"lg"}
          colorText={"gray-400"}
          colorTextHover={"white"}
          widthNormal={"16"}
          height={"16"}
          radius={"full"}
          onClick={() => changePage("/")}
        >
          <MdContentPaste size={iconSize} />
        </Button>
        <div>Task</div>
      </div>
      <div className="flex flex-col justify-center items-center px-5">
        <Button
          color={"white"}
          colorHover={"green-500"}
          font={"bold"}
          textSize={"lg"}
          colorText={"gray-400"}
          colorTextHover={"white"}
          widthNormal={"16"}
          height={"16"}
          radius={"full"}
          onClick={() => changePage("market")}
        >
          <MdPeople size={iconSize} />
        </Button>
        <div>Team</div>
      </div>
      <div className="flex flex-col justify-center items-center px-5">
        <Button
          color={"white"}
          colorHover={"green-500"}
          font={"bold"}
          textSize={"lg"}
          colorText={"gray-400"}
          colorTextHover={"white"}
          widthNormal={"16"}
          height={"16"}
          radius={"full"}
          onClick={() => changePage("setting")}
        >
          <MdDateRange size={iconSize} />
        </Button>
        <div>Calender</div>
      </div>
    </div>
  );
};

export default MenuButton;
