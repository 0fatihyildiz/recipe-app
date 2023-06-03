import React from "react";
import Portal from "../../../app/portal";
import { Modal, Box, Tab, SxProps } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Icon } from "@iconify/react";
import {
  PrimaryButton,
  OutlinedButton,
} from "../../../common/material/styles/button";
import { PrimaryTextField } from "../../../common/material/styles/textField";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

const TabPanelStyle: SxProps = {
  width: "100%",
  padding: "0",
  gap: "15px",
  display: "flex",
  flexDirection: "column",
};

const TabStyle: SxProps = {
  textTransform: "inherit",
};

const AuthModal = ({ open, setOpen }: Props) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) =>
    setValue(newValue);

  return (
    <Portal target="body">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            maxWidth: "500px",
            width: "100%",
            borderRadius: "10px",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <OutlinedButton className="gap-2" variant="text" size="medium">
            <Icon icon="logos:google-icon" fontSize={20} />
            {value === "1" ? "Sign In" : "Sign Up"} with Google
          </OutlinedButton>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "#f5f5f5",
                margin: "10px 0",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="fullWidth"
              >
                <Tab sx={TabStyle} label="Sign In" value="1" />
                <Tab sx={TabStyle} label="Sign Up" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={TabPanelStyle}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={SigninSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
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
                      component={PrimaryTextField}
                      error={!!errors.email && touched.email}
                      helperText={errors.email}
                    />
                    <Field
                      label="Password"
                      name="password"
                      variant="outlined"
                      size="small"
                      type="password"
                      color="primary"
                      autoComplete="current-password"
                      component={PrimaryTextField}
                      error={!!errors.password && touched.password}
                      helperText={touched.password ?? errors.password}
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
            </TabPanel>
            <TabPanel value="2" sx={TabPanelStyle}>
              <PrimaryTextField
                label="Email"
                variant="outlined"
                size="small"
                type="email"
                color="primary"
              />
              <PrimaryTextField
                label="Password"
                variant="outlined"
                size="small"
                type="password"
                color="primary"
              />
              <PrimaryTextField
                label="Confirm Password"
                variant="outlined"
                size="small"
                type="password"
                color="primary"
              />
            </TabPanel>
          </TabContext>
        </Box>
      </Modal>
    </Portal>
  );
};

export default AuthModal;
