import React from "react";
import Portal from "../../../app/portal";
import { Modal, Box, Tab, SxProps } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Icon } from "@iconify/react";
import { OutlinedButton } from "../../../common/material/styles/button";
import SignIn from "./signInForm";
import SignUp from "./signUpForm";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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
              <SignIn />
            </TabPanel>
            <TabPanel value="2" sx={TabPanelStyle}>
              <SignUp />
            </TabPanel>
          </TabContext>
        </Box>
      </Modal>
    </Portal>
  );
};

export default AuthModal;
