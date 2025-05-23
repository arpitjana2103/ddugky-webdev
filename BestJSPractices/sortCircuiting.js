const age = 26;
const cast = "SC";
const poorProof = "PIP";

const canAdmit =
    age >= 18 && age <= 35 && (poorProof === "PIP" || poorProof === "BPL");

console.log(canAdmit);

// const canAdmit = null;

// if (age >= 18 && age <= 35 && (poorProof === "PIP" || poorProof === "BPL")) {
//     canAdmit = true;
// } else {
//     canAdmit = false;
// }
