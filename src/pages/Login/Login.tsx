import React from "react";
import { useLocation } from "react-router-dom";
import { BackgroundLogin } from "../../components/BackgroundLogin/BackgroundLogin";
import { Loader } from "../../components/Loader/Loader";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { selectIsLoading } from "../../redux/auth/auth-selectors";
import { useAppSelector } from "../../redux/store";
import { Container, Content, TitleBox, Title, TitleText } from "./Login.styled";
const Login = () => {
  const isLoading = useAppSelector(selectIsLoading);

  if (isLoading) {
    return <></>;
  }

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
