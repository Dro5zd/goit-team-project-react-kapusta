import styled from "styled-components";

export const FormStyle = styled.form`
  background: #ffffff;
  width: 100%;
  max-width: 100%;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    padding: 56px 89px;
    max-width: 426px;
  }
  /* @media screen and (min-width: 1280px) {
    max-width: 426px;
  } */
`;

export const Content = styled.div`
  max-width: 240px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 259px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  max-width: 222px;
  margin: 0 auto;
  letter-spacing: 0.04em;
  /* color: var(--text); */
  color: #52555f;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    max-width: 100%;
    margin-bottom: 36px;
  }
`;

export const SubText = styled(Text)`
  text-align: left;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ErrorText = styled(Text)`
  /* color: var(--red); */
  margin: 0;
  color: #eb5757;
  text-align: left;
  margin-top: 4px;
  margin-bottom: 0;
`;

export const FieldStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const BtnBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 40px;
`;

export const LabelInput = styled.label`
  font-size: 10px;
  line-height: 1.1;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
  color: #000000;
`;

export const InputStyled = styled.input`
  cursor: pointer;
  margin: 0;
  padding: 17px 19px;
  font: inherit;
  /* background: var(--grayLight); */
  background: #f6f7fb;
  border-radius: 30px;
  height: 52px;
  width: 100%;

  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0.04em;

  /* transition: border 250ms var(--timing-function); */

  &::placeholder {
    color: #a6abb9;
  }

  &:focus:invalid {
    filter: drop-shadow(1px 2px 3px rgba(235, 87, 87, 0.2));
  }
  :valid {
    filter: drop-shadow(1px 2px 3px rgba(6, 242, 199, 0.2));
  }
`;

export const ButtonGoogle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 122px;
  height: 40px;
  margin: 0 auto;
  /* background: var(--grayLight); */
  background: #f6f7fb;
  border-radius: 26px;
  margin-bottom: 32px;

  font-family: "Roboto";
  font-weight: 700;
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  filter: drop-shadow(1px 2px 3px rgba(170, 178, 197, 0.2));

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
