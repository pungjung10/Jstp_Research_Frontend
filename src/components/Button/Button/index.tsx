import React from "react";
import { Props } from "./type";

const Button: React.FC<Props> = ({
  color,
  colorHover,
  font,
  textSize,
  colorText,
  colorTextHover,
  widthNormal,
  widthMobile,
  height,
  radius,
  children,
  onClick,
}) => {
  // bg-white hover:bg-green-500 text-gray-400 hover:text-white font-bold py-2 px-4 rounded-full w-16 h-16 ease-in-out duration-300
  const classes = ["py-2", "px-4", "ease-in-out", "duration-300"];

  if (color) classes.push(`bg-${color}`);

  if (colorHover) classes.push(`hover:bg-${colorHover}`);

  if (font) classes.push(`font-${font}`);

  if (textSize) classes.push(`text-${textSize}`);

  if (colorText) classes.push(`text-${colorText}`);

  if (colorTextHover) classes.push(`hover:text-${colorTextHover}`);

  if (widthNormal) classes.push(`md:w-${widthNormal}`);

  if (widthMobile) classes.push(`w-${widthMobile}`);

  if (height) classes.push(`h-${height}`);

  if (radius) classes.push(`rounded-${radius}`);

  return (
    <button onClick={onClick} className={classes.join(" ")}>
      {children}
    </button>
  );
};

export default Button;
