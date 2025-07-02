const baseUrlName = "https://restcountries.com/v3.1/name";
const baseUrlAlpha = "https://restcountries.com/v3.1/alpha";

const print4Neighbours = async function (countryName) {
    const res = [];
    await fetch(`${baseUrlName}/${countryName}`)
        .then(function (resp) {
            return resp.json();
        })
        .then(function ([data]) {
            const country = data.name.common;
            const neighbourAlpha = data.borders.at(0);
            res.push(country);
            return fetch(`${baseUrlAlpha}/${neighbourAlpha}`);
        })
        .then(function (resp) {
            return resp.json();
        })
        .then(function ([data]) {
            const country = data.name.common;
            const neighbourAlpha = data.borders.at(0);
            res.push(country);
            return fetch(`${baseUrlAlpha}/${neighbourAlpha}`);
        })
        .then(function (resp) {
            return resp.json();
        })
        .then(function ([data]) {
            const country = data.name.common;
            const neighbourAlpha = data.borders.at(0);
            res.push(country);
            return fetch(`${baseUrlAlpha}/${neighbourAlpha}`);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log(",,,,,,,,,,,,");
        });

    console.log(res);
};

print4Neighbours("Germany");
console.log("Hello World");
