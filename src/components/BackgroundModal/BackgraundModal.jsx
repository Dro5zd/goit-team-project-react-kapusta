import { BackMod, BoxModal, Content } from "./BackgraundModal.styled";

export const BackgroundModal = ({ children }) => {
  return (
    <Content>
      <BoxModal>
        <BackMod />
        {children}
      </BoxModal>
    </Content>
  );
};
