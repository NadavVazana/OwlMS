import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

type SearchInputProps = {
  height: string;
};
export const SearchInput = styled(TextField)<SearchInputProps>(
  ({ height = "60px" }) => ({
    input: { color: "white" },
    color: "white",
    borderRadius: "11px",

    "& .MuiOutlinedInput-root": {
      height: height,
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& label.Mui-focused": {
      color: "white",
    },
  })
);
