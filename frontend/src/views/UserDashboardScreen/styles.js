import { createStyles } from "@material-ui/core";

export const styles = (theme) =>
  createStyles({
    mainContainer: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      flexDirection: "column",
    },
    filterNavContainer: {
      alignSelf: "center",
    },
    tableContainer: {
      width: "100%",
      padding: "1.5rem"
    },
    buttonsContainer: {},
    userFilterButton: {
      width: "10rem",
      height: "3rem",
      margin: "2rem 1rem 2rem 0",
    },
    userFilterText: {
      fontSize: "1rem",
      textTransform: "capitalize",
      width: "100%",
    },
    balanceContainer: {
      marginBottom: "2rem"
    }
  });
