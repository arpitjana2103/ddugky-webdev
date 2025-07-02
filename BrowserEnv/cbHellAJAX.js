// Display a neighbour country name of a given country, and then print the neighbour country of the neighbour country again unatil 4 levels

// India
// Pakistan
// Afganistan
// Iran
// Iraq

const baseUrlName = "https://restcountries.com/v3.1/name";
const baseUrlAlpha = "https://restcountries.com/v3.1/alpha";

const print4Neighbours = function (countryName) {
    const req01 = new XMLHttpRequest();
    req01.open("GET", `${baseUrlName}/${countryName}`);
    req01.send();

    req01.addEventListener("load", function () {
        // LEVEL 01
        const data01 = JSON.parse(req01.responseText).at(0);
        console.log(data01.name.common);
        const neighbourAlpha01 = data01.borders.at(0);

        const req02 = new XMLHttpRequest();
        req02.open("GET", `${baseUrlAlpha}/${neighbourAlpha01}`);
        req02.send();

        req02.addEventListener("load", function () {
            // LEVEL 02
            const data02 = JSON.parse(req02.responseText).at(0);
            console.log(data02.name.common);
            const neighbourAlpha02 = data02.borders.at(0);

            const req03 = new XMLHttpRequest();
            req03.open("GET", `${baseUrlAlpha}/${neighbourAlpha02}`);
            req03.send();

            req03.addEventListener("load", function () {
                // LEVEL 03
                const data03 = JSON.parse(req03.responseText).at(0);
                console.log(data03.name.common);
                const neighbourAlpha03 = data03.borders.at(0);

                const req04 = new XMLHttpRequest();
                req04.open("GET", `${baseUrlAlpha}/${neighbourAlpha03}`);
                req04.send();

                req04.addEventListener("load", function () {
                    // LEVEL 04
                    const data04 = JSON.parse(req04.responseText).at(0);
                    console.log(data04.name.common);
                });
            });
        });
    });
};

print4Neighbours("Germany");
