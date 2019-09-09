import React from "react";
import { Route, Switch } from "react-router-dom";
import CompaniesPage from "../CompaniesPage/CompaniesPage";
import TrackNewCompanyPage from "../TrackNewCompanyPage/TrackNewCompanyPage";
import styles from "./App.module.css";

const App: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={CompaniesPage} />
        <Route path="/track-new" component={TrackNewCompanyPage} />
      </Switch>
    </div>
  );
};

export default App;
