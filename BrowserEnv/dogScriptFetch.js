const imgTag = document.querySelector("img");
const btn = document.querySelector("button");

const getNewDog = function () {
    fetch("https://dogg.ceo/api/breeds/image/random", {
        method: "GET",
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            imgTag.src = data.message;
        })
        .catch(function (error) {
            console.log("An Errror Detected ❗❗❗");
            console.log(error.message);
        })
        .finally(function () {
            console.log("Api Call Ended..");
        });
};

getNewDog();
btn.addEventListener("click", getNewDog);
