import { Content, GrayBg } from "./BackgroundLogin.styled";

interface IBackgroundLogin {
    children: JSX.Element
}

export const BackgroundLogin = ({children}:IBackgroundLogin) => {
  return (
    <Content>
      <GrayBg />
      {children}
    </Content>
  );
};
