const getCurrTime = function () {
    return new Intl.DateTimeFormat("en-US", {
        dateStyle: "short",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
    }).format(new Date());
};

class BankAccount {
    #phone;
    #pan;
    #initalAmount;
    #accountNo;
    #transctions;
    #accountOpenDate;
    #balance;
    #type;

    constructor({ name, phone, pan, nominee, initalAmount }) {
        this.owner = name;
        this.nominee = nominee;
        this.#phone = phone;
        this.#pan = pan;
        this.#accountNo = phone + Date.now();
        this.#accountOpenDate = new Date();
        this.#transctions = [
            { time: getCurrTime(), amount: initalAmount, type: "deposit" },
        ];
        this.#balance = initalAmount;
        this.#type = "silver";

        // return this
    }

    get balance() {
        return `Total Balance : ${this.#balance} Rs.`;
    }

    get accountType() {
        this.updateAccountType();
        return this.#type;
    }

    get accountDetails() {
        return {
            "Owner Name": this.owner,
            "Nominee Name": this.nominee,
            "Account Number": this.#accountNo,
            "Phone Number": this.#phone,
        };
    }

    #calcDeposite() {
        let totalDeposite = 0;
        this.#transctions.forEach(function (trans) {
            if (trans.type === "deposit") totalDeposite += trans.amount;
        });
        return totalDeposite;
    }

    updateAccountType() {
        const totalDeposite = this.#calcDeposite();
        if (totalDeposite < 50000) this.#type = "silver";
        if (totalDeposite >= 50000 && totalDeposite < 100_000)
            this.#type = "gold";
        if (totalDeposite >= 100_000) this.#type = "platinum";
    }

    approveLoan(disiredLoanAmount) {
        this.updateAccountType();

        let loanAmount = 0;
        if (this.#type === "silver") loanAmount = 20000;
        if (this.#type === "gold") loanAmount = 40000;
        if (this.#type === "platinum") loanAmount = 70000;

        return disiredLoanAmount <= loanAmount;
    }

    applyLoan(disiredLoanAmount) {
        if (this.approveLoan(disiredLoanAmount)) {
            this.deposit(disiredLoanAmount);
            console.log("Congratulations! Your loan has been approved.");
        } else
            console.log(
                `You are not eligible to take loan of amount ${disiredLoanAmount}`
            );
    }

    deposit(depositeAmount) {
        this.#balance += depositeAmount;
        this.#transctions.push({
            time: getCurrTime(),
            amount: depositeAmount,
            type: "deposit",
        });
    }

    withdraw(withdrawAmount) {
        if (withdrawAmount > this.#balance) {
            console.log(`Withdraw of ${withdrawAmount}rs. can't be processed!`);
            console.log("Error : Insufficient Balance");
            return;
        }

        this.#balance -= withdrawAmount;
        this.#transctions.push({
            time: getCurrTime(),
            amount: -withdrawAmount,
            type: "withdraw",
        });
    }

    displayStatement() {
        console.log(`\n\n --- TRANSACTIONS OF ACC NO: ${this.#accountNo} --- `);
        console.table(this.#transctions);
    }
}

///////////////////////////////

const user01 = {
    name: "fagan parte",
    phone: 1234567890,
    pan: "BNPH12456",
    nominee: "raamkishore parte",
    initalAmount: 500,
};

const acc01 = new BankAccount(user01);

console.log(acc01);
console.log(acc01.accountDetails);

acc01.deposit(200);

console.log(acc01.approveLoan(50000));

console.log(acc01.accountType);
