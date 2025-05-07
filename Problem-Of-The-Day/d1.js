// Pending Questions :
// HCF : Algo 01

const getFactors = function (num) {
    const res = [];
    let i = 1;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) res.push(i);
    }
    return res;
};

const getCommons = function (arr01, arr02) {
    let pt01 = 0;
    let pt02 = 0;
    const res = [];
    while (pt01 < arr01.length && pt02 < arr02.length) {
        if (arr01[pt01] == arr02[pt02]) {
            res.push(arr01[pt01]);
            pt01++;
            pt02++;
        } else if (arr01[pt01] < arr02[pt02]) pt01++;
        else pt02++;
    }
    return res;
};

const getHCFAlgo01 = function (num01, num02) {
    const factors01 = getFactors(num01);
    const factors02 = getFactors(num02);
    const commonFactors = getCommons(factors01, factors02);
    return Math.max(...commonFactors);
};

// HCF : Algo 02

// num1 * num2 = lcm * hcf
// lcm = num1 * num2 / hcf

const getHCFAlgo02 = function (dividend, divider) {
    while (dividend % divider !== 0) {
        let remainder = dividend % divider;

        dividend = divider;
        divider = remainder;
    }

    return divider;
};

const getLCM = function (num1, num2) {
    // Formula || lcm = num1 * num2 / hcf
    const hcf = getHCF(num2, num2);
    const lcm = (num1 * num2) / hcf;
    return lcm;
};

const [n1, n2] = [100, 85];
console.log(getHCFAlgo01(n1, n2), getHCFAlgo02(n1, n2));
