import React, { useEffect } from "react";
import { connect } from "react-redux";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";
import { fetchSmurfs } from "../src/actions/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = (props) => {
  // console.log(props);
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList />
        <AddForm />
      </main>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.
