import { Content, GrayBg } from "./BackgroundMain.styled";

interface IBackgroundMain {
  children: JSX.Element;
}

export const BackgroundMain = ({ children }: IBackgroundMain) => {
  return (
    <Content>
      <GrayBg />
      {children}
    </Content>
  );
};
