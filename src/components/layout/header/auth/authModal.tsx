import React, { useState } from "react";
import Portal from "../../../app/portal";
import { Modal, Box, Typography } from "@mui/material";


const AuthModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Portal target="body">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Portal>
  );
};

export default AuthModal;
