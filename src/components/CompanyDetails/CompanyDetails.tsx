import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import { Company } from "../../redux/companies/types";
import { getGlobalQuote } from "../../api/companyApi";
import { formatObjectKeys } from "../../utils/helpers";

interface CompanyDetailsProps {
  companyData: Company;
  onDelete: (symbol: string) => void;
}

const CompanyDetail: React.FunctionComponent<CompanyDetailsProps> = ({
  companyData,
  onDelete
}) => {
  const [quoteData, setQuoteData] = useState(null);
  const {
    symbol,
    marketClose,
    marketOpen,
    name,
    region,
    currency,
    timezone
  } = companyData;

  function handleDelete() {
    onDelete(symbol);
  }

  useEffect(() => {
    getGlobalQuote(symbol)
      .then(res => {
        const globalQuote = formatObjectKeys(res["Global Quote"]);
        const quoteData = {
          price: globalQuote.price,
          change: globalQuote.change,
          changePercent: globalQuote.changePercent
        };
        setQuoteData(quoteData);
      })
      .catch(err => console.log(err));
  }, [symbol]);

  return (
    <div>
      <ul>
        <li>
          {symbol} - {name}
        </li>
        <li>
          {region}, {marketOpen} - {marketClose}, {timezone}
        </li>
        {quoteData && (
          <li>
            {quoteData.price} {currency} {quoteData.change} (
            {quoteData.changePercent})
          </li>
        )}
      </ul>
      <Button variant="warning" type="button" onClick={handleDelete} size="sm">
        Delete
      </Button>
    </div>
  );
};

export default CompanyDetail;
