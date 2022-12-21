import React from "react";
import { useLocation } from "react-router-dom";
import { BackgroundLogin } from "../../components/BackgroundLogin/BackgroundLogin";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import {
  Container,
  Title,
  Content,
  TitleBox,
  TitleText,
} from "./Register.styled";

const Register = () => {
  return (
    <BackgroundLogin>
      <Container>
        <Content>
          <TitleBox>
            <Title />
            <TitleText>Smart Finance</TitleText>
          </TitleBox>
          <RegisterForm />
        </Content>
      </Container>
    </BackgroundLogin>
  );
};

export default Register;
