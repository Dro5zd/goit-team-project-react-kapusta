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
import { useFormik } from "formik";
import * as yup from "yup";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { ReactComponent as GoogleIcon } from "../../images/svg/google.svg";
import { Button } from "../../components/Button/Button";

const initialValues = {
  email: "",
  password: "",
};

export const RegisterForm = () => {
  // const handleSubmit = (values, actions) => {
  //   actions.resetForm();
  // };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: yup.object().shape({
  //     name: yup.string().required("Only letters"),
  //     email: yup
  //       .string()
  //       .email("Email must be a valid email")
  //       .min(3)
  //       .max(254)
  //       .required("This is a required field"),
  //     password: yup
  //       .string()
  //       .min(8)
  //       .max(100)
  //       .matches(
  //         /^[A-Za-z0-9]*$/,
  //         "Password can only contain letters and numbers"
  //       )
  //       .required("This is a required field"),
  //   }),
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // onSubmit: (values, actions) => {
  //   console.log("onSubmi");
  //   console.log(values, actions);
  //   // actions.resetForm();
  // },
  // });

  // console.log(formik.errors, "error", formik.touched.email);
  return (
    <>
      {/* <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">Submit</button>
      </form> */}

      <FormStyle onSubmit={formik.handleSubmit}>
        <Content>
          <Text>You can log in with your Google Account:</Text>
          <ButtonGoogle type="button" on>
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
              onChange={formik.handleChange}
              value={formik.values.email}
              {...formik.getFieldProps("email")}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
              // className="form-control"
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorText>{formik.errors.email}</ErrorText>
            ) : null}
          </FieldStyle>
          <FieldStyle>
            <LabelInput htmlFor="password">Number</LabelInput>
            <InputStyled
              type="password"
              name="password"
              autoComplete="off"
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
          <BtnBox>
            {/* <button type="">Log</button> */}
            {/* <ButtonLink to="/login">Log in</ButtonLink> */}
            <Button type="submit" color="true">
              Log in
            </Button>
            <ButtonLink to="/register">Registration</ButtonLink>
          </BtnBox>
        </Content>
      </FormStyle>
    </>
  );
};
