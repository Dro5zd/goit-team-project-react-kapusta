import { StyledLink } from "./ButtonLink.styled";
import PropTypes from "prop-types";

export const ButtonLink = ({ to, children, styled, state, color = false }) => {
  return (
    <StyledLink to={to} style={styled} state={state}>
      {children}
    </StyledLink>
  );
};

ButtonLink.propTypes = {
  path: PropTypes.string,
  state: PropTypes.string,
  children: PropTypes.node.isRequired,
};
