// Display country details, get the data from an API call

const baseURL = `https://restcountries.com/v3.1`;

const printDetials = function (data) {
    const { name: currencyName, symbol: currencySymbol } = Object.values(
        data.currencies
    ).at(0);

    const details = {
        name: data.name.common,
        area: data.area,
        capical: data.capital.at(0),
        languages: Object.values(data.languages),
        neighbours: data.borders,
        currency: `${currencyName} (${currencySymbol})`,
    };

    console.log(details);
};

const displayCountryDetails = function (country) {
    // 1. Send Request to server
    const req = new XMLHttpRequest();
    req.open("GET", `${baseURL}/name/${country}`);
    req.send();

    // 2. Receive Response
    req.addEventListener("load", function () {
        const data = JSON.parse(req.responseText).at(0);
        printDetials(data);
    });
};

displayCountryDetails("india");
