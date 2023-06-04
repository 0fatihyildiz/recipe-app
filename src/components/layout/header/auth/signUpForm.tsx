import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { PrimaryTextField } from "../../../common/material/styles/textField";
import { PrimaryButton } from "../../../common/material/styles/button";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const handleSubmit = (values: object) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col space-y-4">
          <Field
            label="Email"
            name="email"
            variant="outlined"
            size="small"
            type="email"
            color="primary"
            autoComplete="email"
            as={PrimaryTextField}
            error={!!errors.email && touched.email}
            helperText={touched.password && errors.email}
          />
          <Field
            label="Password"
            name="password"
            variant="outlined"
            size="small"
            type="password"
            color="primary"
            autoComplete="password"
            as={PrimaryTextField}
            error={!!errors.password && touched.password}
            helperText={touched.password && errors.password}
          />
          <Field
            label="Confirm Password"
            name="confirmPassword"
            variant="outlined"
            size="small"
            type="password"
            color="primary"
            autoComplete="confirm-password"
            as={PrimaryTextField}
            error={!!errors.confirmPassword && touched.confirmPassword}
            helperText={touched.confirmPassword && errors.confirmPassword}
          />
          <PrimaryButton
            variant="contained"
            color="primary"
            size="medium"
            type="submit"
          >
            Sign Up
          </PrimaryButton>
        </Form>
      )}
    </Formik>
  );
}
