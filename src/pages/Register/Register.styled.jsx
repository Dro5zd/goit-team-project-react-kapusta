import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device} from "../../utils/mixins";
import { ReactComponent as titleHero } from "../../images/svg/capusta-hero.svg";

export const Container = styled.div`
  position: relative;
  padding: 86px 20px 105px;

  height: 100%;
  display: flex;
  flex-direction: column;

  ${device.tablet} {
    padding: 13vh 0 155px;
    height: 100%;
  }
  ${device.desktop} {
    padding: 13vh 0 30px;
    height: 100%;
  } ;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 426px;
  margin: 0 auto;

  ${device.desktop} {
    display: flex;
    max-width: 960px;
    align-items: center;
    justify-content: space-between;
  }
`;
export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 183px;
  margin-bottom: 50px;

  ${device.tablet} {
    width: 307px;
    margin-bottom: 80px;
  }
  ${device.desktop} {
    width: 377px;
  }
`;

export const Title = styled(titleHero)`
  width: 183px;
  height: 47px;

  ${device.tablet} {
    width: 306px;
    height: 78px;
  }
  ${device.desktop} {
    width: 377px;
    height: 120px;
  }
  @media screen and (min-width: 768px) {
    width: 306.52px;
    height: 77.69px;
  }

  @media screen and (min-width: 1280px) {
    width: 377px;
    height: 120px;
  }
`;
export const TitleText = styled.span`
  position: relative;
  left: 10px;
  font-weight: 700;
  font-size: 13px;
  line-height: 1.1;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${colors.grayTitle};
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    letter-spacing: 0.18em;
    left: 54px;
  }
  @media screen and (min-width: 1280px) {
    left: 67px;
  }
`;
