import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { AppState } from "../../redux/store";
import { CompaniesState } from "../../redux/companies/types";

interface CompaniesPageProps {
  companies: CompaniesState;
}

const CompaniesPage: React.FunctionComponent<CompaniesPageProps> = ({
  companies
}) => {
  console.log(companies);
  return (
    <div>
      <h1>Companies</h1>
      {companies.length === 0 ? (
        <div>
          <p>
            There are no companies yet.
            <Link to="/track-new"> Track your first company.</Link>
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

function mapStateToProps(state: AppState) {
  return {
    companies: state.companies
  };
}

export default connect(
  mapStateToProps,
  null
)(CompaniesPage);
