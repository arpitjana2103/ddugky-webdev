const imgTag = document.querySelector("img");
const btn = document.querySelector("button");

const getNewDog = function () {
    const req = new XMLHttpRequest();
    req.open("GET", "https://dog.ceo/api/breeds/image/random");
    req.send();

    req.timeout = 3000;

    req.addEventListener("load", function () {
        if (req.status === 200) {
            const data = JSON.parse(req.responseText);
            const dogImg = data.message;
            imgTag.src = dogImg;
        }

        if (req.status === 404) {
            //////
        }
    });

    req.addEventListener("error", function () {
        //////
    });

    req.addEventListener("timeout", function () {
        ///////
    });
};

getNewDog();
btn.addEventListener("click", getNewDog);
