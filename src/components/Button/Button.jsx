import { StyledButton } from "./Button.styled";
import PropTypes from "prop-types";

export const Button = ({
  type = "button",
  disabled = false,
  children,
  styled,
  onClickHandle,
  color,
  icon: Icon = null,
}) => {
  return (
    <StyledButton
      type={type}
      color={color}
      disabled={disabled}
      style={styled}
      onClick={onClickHandle}
    >
      {Icon && <Icon size="20" />}
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  // color: PropTypes.bool,
  disabled: PropTypes.bool,
  onClickHandle: PropTypes.func,
  children: PropTypes.node.isRequired,
};
