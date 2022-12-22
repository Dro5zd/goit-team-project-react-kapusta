import React from "react";
import { useLocation } from "react-router-dom";
import { BackgroundLogin } from "../../components/BackgroundLogin/BackgroundLogin";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Container, Content, TitleBox, Title, TitleText } from "./Login.styled";
const Login = () => {
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

export default Login;
