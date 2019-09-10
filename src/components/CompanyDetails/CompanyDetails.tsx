import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import { getGlobalQuote } from "../../api/companyApi";

function CompanyDetail({
  symbol,
  name,
  region,
  marketOpen,
  marketClose,
  timezone,
  currency,
  onDelete
}) {
  const [quoteData, setQuoteData] = useState(null);

  function handleDelete() {
    onDelete(symbol);
  }

  useEffect(() => {
    getGlobalQuote(symbol)
      .then(res => {
        const globalQuote = res["Global Quote"];
        const quoteData = {
          price: globalQuote["05. price"],
          change: globalQuote["09. change"],
          changePercent: globalQuote["10. change percent"]
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
}

export default CompanyDetail;
