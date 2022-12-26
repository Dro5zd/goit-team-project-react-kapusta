import { omit } from "lodash-es";
import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { ReactComponent as GoogleIcon } from "../../assets/images/svg/google.svg";
import { Button } from "../Button/Button";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { loginGoogle, loginUser } from "../../redux/auth/auth-operations";
import { createUserService } from "../../http/services.user";
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
  ErrorStar,
  LinkGoogle,
} from "./RegisterForm.styled";

const initialValues = {
  email: "",
  password: "",
};

// const formsValue = {
//
//   ...{
//     stateOrProvince: null,
//     stateCd: null,
//     address3: null,
//     phone: null,
//   },
//
//   ...addressFields
// };

export interface IValues {
  email: string;
  password: string;
}

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
    onSubmit: (values: IValues, actions: FormikHelpers<IValues>) => {
      if (location.pathname === "/login" || location.pathname === "/") {
        dispatch(loginUser(values));
      }

      if (location.pathname === "/register") {
        createUserService(values)
          .then(() => {
            toast.success("Success");
            dispatch(loginUser(omit(values))).unwrap();
          })
          .catch(() => toast.error("Error"));
      }

      actions.resetForm();
    },
  });

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };

  const renderButtons = () => {
    if (location.pathname === "/login" || location.pathname === "/") {
      return (
        <>
          <Button type="submit" color={"#FF751D"}>
            Log in
          </Button>
          <ButtonLink to="/register">Registration</ButtonLink>
        </>
      );
    }
    if (location.pathname === "/register" || location.pathname === "/") {
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
          {/* <ButtonGoogle type="button" onClick={handleLoginGoogle}>
            <GoogleIcon /> Google
          </ButtonGoogle> */}
          <LinkGoogle
            href={`https://kapusta-backend.goit.global/auth/google`}
            // onClick={handleLoginGoogle}
          >
            <GoogleIcon /> Google
          </LinkGoogle>
          <SubText>
            Or log in using an email and password, after registering:
          </SubText>

          <FieldStyle>
            <LabelInput htmlFor="email">
              {formik.touched.email && formik.errors.email ? (
                <ErrorStar>*</ErrorStar>
              ) : null}
              Email:
            </LabelInput>
            <InputStyled
              type="email"
              name="email"
              autoComplete="off"
              placeholder="your@email.com"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
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
                <ErrorStar>*</ErrorStar>
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
              onBlur={formik.handleBlur}
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
