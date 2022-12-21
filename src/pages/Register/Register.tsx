import React from "react";
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

export default Register;
