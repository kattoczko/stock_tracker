import React, { useState, useEffect } from "react";
import { FormControlProps } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { AppState } from "../../redux/store";
import * as companiesActions from "../../redux/companies/companiesActions";
import { getSuggestedCompanies } from "../../api/companyApi";
import { useDebounce } from "../../utils/customHooks";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Autosuggest from "react-autosuggest";

interface TrackNewCompanyPageProps {
  addTrackedCompany: typeof companiesActions.addTrackedCompany;
}

const TrackNewCompanyPage: React.FunctionComponent<
  TrackNewCompanyPageProps
> = ({ addTrackedCompany }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [pickedSuggestion, setPickedSuggestion] = useState(null);
  const debouncedSearchTerm = useDebounce(inputValue, 250);

  useEffect(() => {
    if (debouncedSearchTerm && !pickedSuggestion) {
      getSuggestedCompanies(debouncedSearchTerm).then(result => {
        if (result.bestMatches.length > 0) {
          const suggestions = result.bestMatches;
          setSuggestions(suggestions);
        }
      });
    }
  }, [debouncedSearchTerm]);

  function handleInputChange(
    e: React.ChangeEvent<FormControlProps>,
    { newValue, method }
  ): void {
    setInputValue(newValue);
    if (method === "type") {
      setPickedSuggestion(null);
    }
  }

  function handleTrackButtonClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    addTrackedCompany(inputValue);
  }

  function handleSuggestionsFetchRequested({ value }) {
    console.log(value);
  }

  function handleSuggestionsClearRequested() {
    setSuggestions([]);
  }

  function getSuggestionValue(suggestion) {
    setPickedSuggestion(suggestion);
    return suggestion["1. symbol"];
  }

  function renderSuggestion(suggestion) {
    return <div>{suggestion["1. symbol"]}</div>;
  }

  return (
    <div>
      <h1>Track new company</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Company symbol</Form.Label>
          <Autosuggest
            className="form-control"
            suggestions={suggestions}
            onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
            onSuggestionsClearRequested={handleSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={{
              placeholder: "Write company symbol",
              value: inputValue,
              onChange: handleInputChange
            }}
          />
          <Form.Text className="text-muted">
            Provide the stock exchange symbol of a company you want to track
          </Form.Text>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={handleTrackButtonClick}
          disabled={!pickedSuggestion}
        >
          Track
        </Button>
      </Form>
    </div>
  );
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addTrackedCompany: bindActionCreators(
      companiesActions.addTrackedCompany,
      dispatch
    )
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TrackNewCompanyPage);
