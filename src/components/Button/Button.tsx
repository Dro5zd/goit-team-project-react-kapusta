import { StyledButton } from "./Button.styled";
import {CSSProperties} from 'react';

interface IButton {
  type: "button" | "submit" | "reset" | undefined,
  disabled?: boolean,
  styled?: CSSProperties | undefined,
  color: string
  onClickHandle?: ()=> void,
  children: string,
  icon?: JSX.Element | null
}

export const Button = ({
  type = "button",
  disabled = false,
  children,
  styled,
  onClickHandle,
  color,
  icon: Icon = null,
}:IButton) => {
  return (
    <StyledButton
      type={type}
      color={color}
      disabled={disabled}
      style={styled}
      onClick={onClickHandle}
    >

  {/*// @ts-ignore*/}
      {Icon && <Icon size="20" />}
      {children}
    </StyledButton>
  );
};

