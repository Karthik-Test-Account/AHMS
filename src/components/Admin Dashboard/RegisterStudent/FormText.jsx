import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";

function FormText(props) {
  <></>;
}

export default function UseFormControl() {
  return (
    <form noValidate autoComplete="off">
      <FormControl
        sx={{
          width: "20ch",
          backgroundColor: "gray",
          border: "none",
          outline: "none",
          borderRadius: "10px",
          cursor: "pointer",
          color: "white",
          "& .MuiOutlinedInput-root": {
            "& input": {
              color: "white",
            },
            "& fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
        }}
      >
        <OutlinedInput placeholder="" />
      </FormControl>
    </form>
  );
}
