const imgTag = document.querySelector("img");
const btn = document.querySelector("button");

const getNewDog = async function () {
    try {
        const resp = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await resp.json();
        imgTag.src = data.message;
    } catch (error) {
        console.log("An Errror Detected ❗❗❗");
        console.log(error.message);
    }
    console.log("Api Call Ended..");
};

getNewDog();
btn.addEventListener("click", getNewDog);
