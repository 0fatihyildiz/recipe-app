import React from "react";
import Portal from "../../../app/portal";
import { Modal, Box, TextField, ThemeCssVar} from "@mui/material";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontSize: "12px",
}

const AuthModal = ({ open, setOpen }: Props) => {
  return (
    <Portal target="body">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ backgroundColor: "white", maxWidth: "500px", width: "100%", borderRadius: "10px", padding: "20px 25px",  display: "flex", flexDirection: "column", gap: "20px"  }}>
          <TextField label="Email" sx={inputStyle} size="small" />
          <TextField label="Password" sx={inputStyle} size="small" />
        </Box>
      </Modal>
    </Portal>
  );
};

export default AuthModal;
