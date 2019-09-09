import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TrackNewCompanyPage: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <h1>Track new company</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Company symbol</Form.Label>
          <Form.Control type="text" placeholder="Company symbol" />
          <Form.Text className="text-muted">
            Provide the stock exchange symbol of a company you want to track
          </Form.Text>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={() => console.log("click")}
        >
          Track
        </Button>
      </Form>
    </div>
  );
};

export default TrackNewCompanyPage;
