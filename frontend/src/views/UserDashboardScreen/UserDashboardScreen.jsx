import React, { Component } from "react";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import {
  getHistory,
  getBalance,
  getTransactionById,
  createTransaction
} from "../../redux/dispatchers";

import {
  Header,
  Loader,
  SimpleAccordion
} from "../../components";
import { styles } from "./styles";

class UserDashboardScreenRaw extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    const { fetchHistory, fetchBalance } = this.props;
    await fetchBalance();
    await fetchHistory();
    this.setState({ isLoading: false });
  };

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render = () => {
    const { classes, handleLogout, history, balance } = this.props;
    const { isLoading } = this.state;

    const data = history;

    const navItems = [
      {
        path: "/dashboard",
        text: "Accounting notebook",
      },
    ];

    return (
      <div className={classes.mainContainer}>
        <Header navItems={navItems} handleLogout={handleLogout}/>

        <div className={classes.balanceContainer}>
          <Typography variant="h5">Total Balance: { balance }</Typography>
        </div>

        <div className={classes.tableContainer}>
          {isLoading ? (
            <Loader size="20" color="#729CE4" loading={isLoading} />
          ) : (
            <div className={classes.historyContainer}>
              <Typography variant="h5">Transaction History:</Typography>
              <SimpleAccordion data={data} />
            </div>
          )}
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  history: state.transactionsReducer.history,
  balance: state.usersReducer.balance,
  transaction: state.transactionsReducer.transactionDetail
});

const mapDispatchToProps = (dispatch) => ({
  fetchHistory: () => getHistory(dispatch),
  fetchBalance: () => getBalance(dispatch),
  fetchTransactionById: (payload) => getTransactionById(dispatch, payload),
  generateTransaction: (payload) => createTransaction(dispatch, payload),
});

export const UserDashboardScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UserDashboardScreenRaw));
