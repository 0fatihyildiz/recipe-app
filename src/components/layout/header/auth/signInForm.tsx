import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { PrimaryTextField } from "../../../common/material/styles/textField";
import { PrimaryButton } from "../../../common/material/styles/button";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function SignIn() {
  const handleSubmit = (values: object) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SigninSchema}
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
            autoComplete="current-password"
            as={PrimaryTextField}
            error={!!errors.password && touched.password}
            helperText={touched.password && errors.password}
          />
          <PrimaryButton
            variant="contained"
            color="primary"
            size="medium"
            type="submit"
          >
            Sign In
          </PrimaryButton>
        </Form>
      )}
    </Formik>
  );
}
