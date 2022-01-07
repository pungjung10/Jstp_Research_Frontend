import React from "react";

export interface Props {
  color: string;
  colorHover: string;
  font?: string;
  textSize?: string;
  colorText?: string;
  colorTextHover?: string;
  widthNormal?: string;
  widthMobile?: string;
  height?: string;
  radius?: string;
  border?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
