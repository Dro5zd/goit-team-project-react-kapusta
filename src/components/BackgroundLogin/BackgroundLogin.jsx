import { Content, GrayBg } from "./BackgroundLogin.styled";

export const BackgroundLogin = ({ children }) => {
  return (
    <Content>
      <GrayBg />
      {children}
    </Content>
  );
};
