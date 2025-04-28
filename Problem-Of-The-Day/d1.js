// Pending Questions :
// HCF : Algo 01

// HCF : Algo 02

// num1 * num2 = lcm * hcf
// lcm = num1 * num2 / hcf

const getHCF = function (dividend, divider) {
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
