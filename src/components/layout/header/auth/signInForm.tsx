import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { PrimaryTextField } from "../../../common/material/styles/textField";
import { PrimaryButton } from "../../../common/material/styles/button";
import { supabase } from "../../../../lib/helper/supabaseClient";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email cannot be left blank"),
  password: Yup.string().required("Password cannot be left blank"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function SignIn() {
  const handleSubmit = async (values: { email: string; password: string }) => {
    const { data, error } = await supabase.auth.signInWithPassword(values)
    if (error)
      return alert(error.message)

    if (data)
      return alert('Login Successful')
    
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
