import React from "react";
import { Route, Switch } from "react-router-dom";
import CompaniesPage from "../CompaniesPage/CompaniesPage";
import TrackNewCompanyPage from "../TrackNewCompanyPage/TrackNewCompanyPage";

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
