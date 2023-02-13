import InputBase from "@mui/material/InputBase";
import { alpha, createTheme, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#151515",
      light: "#1b85d1",
      contrastText: "#fff",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
          marginTop: "16px",
          fontSize: "16px",
          textAlign: "center",
          borderRadius: "opx",
          justifyContent: "center",
          "&.button-selected": {
            backgroundColor: "white",
            color: "red",
            borderBottom: "2px solid  #120af7",
            "&:hover": {
              backgroundColor: "white",
              color: "red",
            },
          },
          "&.contact-button": {
            backgroundColor: "white",
            top: "15px",
            width: "250px",
            ":hover": {
              backgroundColor: "#0d3858",
              color: "#fff",
            },
          },
          "&.customer-care-style": {
            color: "white",
            "&:hover": {
              backgroundColor: "#076fef544",
              color: "white",
            }, 
          }
        },
      },
    },
  },

  typography: {
    fontSize: 12,
    fontFamily: ["Suisse Int", "sans-serif"].join(","),
    h1: {
      fontSize: "36px",
    },
    h2: {
      fontSize: "28px",
    },
    h4: {
      fontSize: "20px",
      },
    h5: {
      fontSize: "18px",
      },
    h6: {
      fontSize: "12px",
      fontWeight: 450,
    },
    subtitle1: {
      fontSize: "16px",
    },
    body1: {
      fontWeight: 300,
      "&.body-1": {},
      "&.font-small": {
        fontSize: "14px",
      },
      "&.font-size-18": {
        fontSize: "18px",
      },
      "&.font-size-16": {
        fontSize: "16px",
      },
    },
    body2: {
      fontSize: "16px",
    },
  },
});

theme.typography.h1 = {
  [theme.breakpoints.down("md")]: {},
};
theme.typography.h2 = {
  [theme.breakpoints.down("md")]: {},
};
theme.typography.h4 = {
  fontSize: "20px",
  fontWeight: 500,
};
theme.typography.h6 = {
  fontSize: 18,
};

export default theme;

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&.hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const dashboardBox = {
  width: "100%",
  paddingLeft: "260px",
  marginTop: "64px",
  color: "Black",
  position: "relative",
  cursor: "pointer",
};
