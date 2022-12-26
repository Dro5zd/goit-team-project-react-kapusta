import { ContentMob, GrayBgMobil } from "./BackgrounMobil.styled";

export const BackgroundMobil = ({ children }) => {
  return (
    <ContentMob>
      <GrayBgMobil />
      {children}
    </ContentMob>
  );
};
