import theme from "../../themes/themes";

export const selectBetting = {
    ".bg-title": {
      backgroundColor: "rgba(0,0,0,0.5)",
      height: "81px",
      width: "410px",
      fontWeight: 30,
      padding: "0 0 0 50px",
      lineHeight: "81px",
      color: theme.palette.primary.contrastText,
      fontSize: "16px",
      marginBottom: "50px"
    }
  };
  
  export const LinkButton = {
    width: "100%",
    marginTop: "16px",
    fontSize: "20px",
    textAlign: "center",
    borderRadius: "opx",
    justifyContent: "center",
    "&.button-selected": {
      backgroundColor: "white",
      color: "red",
      borderBottom: "2px solid  #120af7",
      ":hover": {
        backgroundColor: "white",
        color: "red",
      },
    },
    ":hover": {
      backgroundColor: "grey",
      color: "blue",
    },
  };
  