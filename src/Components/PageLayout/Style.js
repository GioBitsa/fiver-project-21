import { styled } from "@mui/system";
import { AppBar } from "@mui/material";
import palette from "../../Shared/palette";

export const MyAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open, drawerwidth }) => ({
  width: "100%",
  marginLeft: 0,
  transition: "all 0.3s",
  ...(open && {
    width: `calc(100% - ${drawerwidth}px)`,
    marginLeft: `${drawerwidth}px`,
  }),
  backgroundColor: palette.primary,
}));

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open, drawerwidth }) => ({
  flexGrow: 1,
  marginLeft: 0,
  ...(open && {
    marginLeft: `-${drawerwidth}px`,
  }),
}));
