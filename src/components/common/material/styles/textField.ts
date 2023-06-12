import { TextField, TextFieldProps, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

const PrimaryTextField = styled(TextField)<TextFieldProps>(() => ({
    fontSize: "10px",
  
    "& label": {
      fontSize: "14px",
      fontWeight: 300,
      color: grey[300],
    },
  
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#f5f5f5",
  
      "&:hover": {
        borderColor: "#eeeeee",
      },
    },
    ".MuiInputBase-root": {
      borderRadius: "10px",
    }
  }));

export { PrimaryTextField }