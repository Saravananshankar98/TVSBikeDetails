import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#151515",
      light: "#1b85d1",
      contrastText: "#fff"
    },
    success: {
      main: "#37c277"
    },
    error: {
      main: "#d63737"
    },
    warning: {
      main: "#d69a37"
    },
    info: {
      main: "#e4e446"
    }
  },

  typography: {
    fontSize: 14,
    fontFamily: ["Suisse Int", "sans-serif"].join(","),
    h1: {
      fontSize: "36px",
      "&.heading-1": {}
    },
    h2: {
      fontSize: "28px",
      "&.heading-2": {}
    },
    h3: {
      fontSize: "22px",
      "&.heading-3": {}
    },
    h4: {
      fontSize: "20px",
      "&.heading-4": {}
    },
    h5: {
      "&.heading-5": {}
    },
    h6: {
      fontSize: 16,
      "&.heading-6": {},
      "&.h6-race-title": {
        fontSize: "16px",
        fontWeight: 450
      },
      "&.h6-balance": {
        fontSize: "18px",
        color: "#7f7f7f"
      },
      "&.h6-size-18": {
        fontSize: "18px",
        fontWeight: 500
      }
    },
    subtitle1: {
      "&.subtitle-1": {}
    },
    subtitle2: {
      "&.subtitle-2": {}
    },
    body1: {
      fontWeight: 300,
      "&.body-1": {},
      "&.font-small": {
        fontSize: "14px"
      },
      "&.font-size-18": {
        fontSize: "18px"
      }
    },
    body2: {
      fontWeight: 300,
      "&.body-2": {}
    }
  }
})

theme.typography.h1 = {
  [theme.breakpoints.down("md")]: {}
};
theme.typography.h2 = {
  [theme.breakpoints.down("md")]: {}
};
theme.typography.h3 = {
  fontSize: 22
};
theme.typography.h4 = {
  fontSize: "20px",
  fontWeight: 500
};
theme.typography.h5 = {
  [theme.breakpoints.down("md")]: {}
};
theme.typography.h6 = {
  fontSize: 18
};
theme.typography.body1 = {
  fontSize: 16,
  "&.small-text": {
    fontSize: 15
  },
  "&.range-section-body1": {
    color: "rgba(21, 21, 21, 0.5)"
  },
  "&.font-small": {
    fontSize: "14px"
  },
  "&.more-info": {
    fontSize: "12px",
    color: "rgba(127, 127, 127, 0.99)",
    "&.more-info-with-icon": {
      display: "flex",
      alignItems: "center",
      ".more-info-icon-space": {
        marginRight: "5px"
      }
    }
  },
  "&.font-size-18": {
    fontSize: "18px"
  }
};
theme.typography.body2 = {
  [theme.breakpoints.down("md")]: {}
};

export default theme;



export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
  justifyContent: "end",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const landingBox = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20191210112546_TVS-Apache-RTR-200.jpg&w=736&h=488&q=75&c=1)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    cursor: "pointer"
  };