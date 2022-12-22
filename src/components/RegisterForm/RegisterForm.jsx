import { omit } from "lodash-es";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { ReactComponent as GoogleIcon } from "../../images/svg/google.svg";
import { Button } from "../Button/Button";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { loginUser } from "../../redux/auth/auth-operations";
import {
  ErrorText,
  FieldStyle,
  FormStyle,
  InputStyled,
  LabelInput,
  Text,
  BtnBox,
  ButtonGoogle,
  SubText,
  Content,
} from "./RegisterForm.styled";
import { createUserService } from "../../http/services.user";

const initialValues = {
  email: "",
  password: "",
};

export const RegisterForm = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  // const isLoading = useAppSelector(selectIsLoading);

  const formik = useFormik({
    initialValues,
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Email must be a valid email")
        .min(3)
        .max(254)
        .required("This is a required field"),
      password: yup
        .string()
        .min(8)
        .max(100)
        .matches(
          /^[A-Za-z0-9]*$/,
          "Password can only contain letters and numbers"
        )
        .required("This is a required field"),
    }),
    onSubmit: (values, actions) => {
      if (location.pathname === "/login") {
        console.log("login", values);
        dispatch(loginUser(values));
      }

      if (location.pathname === "/register") {
        createUserService(values)
          .then(() => {
            toast.success("Success");
            dispatch(loginUser(omit(values))).unwrap();
          })
          .then((data) => console.log("REG", data))
          .catch(() => toast.error("Error"));
      }

      actions.resetForm();
    },
  });

  // const TextField = ({ type, label, name, placeholder, pattern }) => {
  //   return (
  //     <FieldStyle>
  //       <LabelInput htmlFor={name}>
  //         {formik.touched[name] && formik.errors[name] ? (
  //           <ErrorText>*</ErrorText>
  //         ) : null}
  //         {label}:
  //       </LabelInput>
  //       <InputStyled
  //         id={name}
  //         type={type}
  //         name={name}
  //         autoComplete="off"
  //         placeholder={placeholder}
  //         onBlur={formik.handleBlur}
  //         onChange={formik.handleChange}
  //         value={formik.values[name]}
  //         // {...formik.getFieldProps(name)}
  //         pattern={pattern}
  //         required
  //       />
  //       {formik.touched[name] && formik.errors[name] ? (
  //         <ErrorText>{formik.errors[name]}</ErrorText>
  //       ) : null}
  //     </FieldStyle>
  //   );
  // };

  const renderButtons = () => {
    if (location.pathname === "/login") {
      return (
        <>
          <Button type="submit" color={"#FF751D"}>
            Log in
          </Button>
          <ButtonLink to="/register">Registration</ButtonLink>
        </>
      );
    }
    if (location.pathname === "/register") {
      return (
        <>
          <ButtonLink to="/login"> Log in</ButtonLink>
          <Button type="submit" color={"#FF751D"}>
            Registration
          </Button>
        </>
      );
    }
  };

  return (
    <>
      <FormStyle onSubmit={formik.handleSubmit}>
        <Content>
          <Text>You can log in with your Google Account:</Text>
          <ButtonGoogle type="button">
            <GoogleIcon /> Google
          </ButtonGoogle>
          <SubText>
            Or log in using an email and password, after registering:
          </SubText>

          <FieldStyle>
            <LabelInput htmlFor="email">Email:</LabelInput>
            <InputStyled
              type="email"
              name="email"
              autoComplete="off"
              placeholder="your@email.com"
              onChange={formik.handleChange}
              value={formik.values.email}
              {...formik.getFieldProps("email")}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorText>{formik.errors.email}</ErrorText>
            ) : null}
          </FieldStyle>

          <FieldStyle>
            <LabelInput htmlFor="password">
              {formik.touched.password && formik.errors.password ? (
                <ErrorText>*</ErrorText>
              ) : null}
              Password:
            </LabelInput>
            <InputStyled
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              {...formik.getFieldProps("password")}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorText>{formik.errors.password}</ErrorText>
            ) : null}
          </FieldStyle>
          <BtnBox>{renderButtons()}</BtnBox>
        </Content>
      </FormStyle>
    </>
  );
};
