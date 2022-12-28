import { ContentMob, GrayBgMobil } from "./BackgrounMobil.styled";

export const BackgroundMobil = ({ children }: any) => {
  return (
    <ContentMob>
      <GrayBgMobil />
      {children}
    </ContentMob>
  );
};
