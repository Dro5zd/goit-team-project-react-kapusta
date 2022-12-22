import React from "react";
import { useLocation } from "react-router-dom";
import { BackgroundLogin } from "../../components/BackgroundLogin/BackgroundLogin";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { selectIsLoading } from "../../redux/auth/auth-selectors";
import { useAppSelector } from "../../redux/store";
import {
  Wrapper,
  Title,
  Content,
  TitleBox,
  TitleText,
} from "./Register.styled";

const Register = () => {
  const isLoading = useAppSelector(selectIsLoading);

  if (isLoading) {
    return <></>;
  }

  return (
    <BackgroundLogin>
      <Wrapper>
        <Content>
          <TitleBox>
            <Title />
            <TitleText>Smart Finance</TitleText>
          </TitleBox>
          <RegisterForm />
        </Content>
      </Wrapper>
    </BackgroundLogin>
  );
};

export default Register;
