import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { AppState } from "../../redux/store";
import { CompaniesState } from "../../redux/companies/types";
import * as companiesActions from "../../redux/companies/companiesActions";
import CompanyDetail from "../CompanyDetails/CompanyDetails";
import PageContainer from "../PageContainer/PageContainer";

interface CompaniesPageProps {
  companies: CompaniesState;
  removeTrackedCompany: typeof companiesActions.removeTrackedCompany;
}

const CompaniesPage: React.FunctionComponent<CompaniesPageProps> = ({
  companies,
  removeTrackedCompany
}) => {
  const companiesListItems = companies.map(company => {
    return (
      <li key={company.symbol}>
        <CompanyDetail companyData={company} onDelete={removeTrackedCompany} />
      </li>
    );
  });
  return (
    <PageContainer>
      <h1>Companies</h1>
      {companies.length === 0 ? (
        <div>
          <p>
            There are no companies yet.
            <Link to="/track-new"> Track your first company.</Link>
          </p>
        </div>
      ) : (
        <ol>{companiesListItems}</ol>
      )}
    </PageContainer>
  );
};

function mapStateToProps(state: AppState) {
  return {
    companies: state.companies
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    removeTrackedCompany: bindActionCreators(
      companiesActions.removeTrackedCompany,
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesPage);
