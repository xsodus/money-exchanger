

const API_URL = "https://api.exchangeratesapi.io"

class ExchangeRateAPI 
{
    static getLatestRate(base, callback)
    {
        // TODO : Call the api to get the lastest rate
        // "https://api.exchangeratesapi.io/latest"
        fetch(`${API_URL}/latest?base=${base}`)
            .then(data => data.json())
            .then(
                (result) => {
                    callback(result, null)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    callback(null, error);
                }
            );
    }
}

export default ExchangeRateAPI;