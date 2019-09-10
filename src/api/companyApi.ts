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

export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  console.error("API call failed. " + error);
  throw error;
}
