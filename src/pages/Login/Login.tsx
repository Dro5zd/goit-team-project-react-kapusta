import React from "react";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Container, Content, TitleBox, Title, TitleText } from "./Login.styled";
const Login = () => {
  return (
    <Container>
      <Content>
        <TitleBox>
          <Title />
          <TitleText>Smart Finance</TitleText>
        </TitleBox>
        <RegisterForm />
      </Content>
    </Container>
  );
};

export default Login;
