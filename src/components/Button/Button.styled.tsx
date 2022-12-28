import styled from "styled-components";

// import { createGlobalStyle } from "styled-components";

export const StyledButton = styled.button`
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 116px;
  height: 44px;
  background: ${(p) => (p.color ? "#ff751d" : "#F5F6FB")};
  border-radius: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${(p) => (p.color ? "#ffffff" : "#52555F")};
  cursor: pointer;
  filter: drop-shadow(${(p) =>
          p.color
                  ? "1px 3px 5px rgba(255, 107, 8, 0.35)"
                  : "1px 3px 5px rgba(82, 85, 95, 0.15)"});

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: 1px 2px 6px 1px rgba(33, 33, 33, 0.4);
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    position: relative;
    z-index: -1;
  }
`;
