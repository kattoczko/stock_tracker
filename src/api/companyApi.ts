import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export function getSuggestedCompanies(value: string) {
  return fetch(
    `${baseUrl}function=SYMBOL_SEARCH&keywords=${value}&apikey=${apiKey}`
  )
    .then(handleResponse)
    .catch(handleError);
}

export function getGlobalQuote(symbol: string) {
  return fetch(
    `${baseUrl}function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
  )
    .then(handleResponse)
    .catch(handleError);
}
