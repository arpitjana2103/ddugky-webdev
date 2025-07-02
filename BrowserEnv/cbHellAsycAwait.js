const baseUrlName = "https://restcountries.com/v3.1/name";
const baseUrlAlpha = "https://restcountries.com/v3.1/alpha";

const print4Neighbours = async function (countryName) {
    try {
        const res = [];
        // Level 01
        const resp01 = await fetch(`${baseUrlName}/${countryName}`);
        const [data01] = resp01.json();

        const country01 = data01.name.common;
        const neighbourAlpha01 = data01.borders.at(0);

        res.push(country01);

        // Level 02
        const resp02 = await fetch(`${baseUrlAlpha}/${neighbourAlpha01}`);
        const [data02] = resp02.json();

        const country02 = data02.name.common;
        const neighbourAlpha02 = data02.borders.at(0);

        res.push(country02);

        // Level 03

        console.log(res);
    } catch (error) {
        console.log(error);
    }

    /// Finally
    console.log(",,,,,,,,,,,,");
};

print4Neighbours("Germany");
console.log("Hello World");
