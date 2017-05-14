var account = {
    balance: 0
};

function deposit (account, amount) {
    account.balance += amount;
};

function withdraw (account, amount) {
    account.balance -= amount;
};

function getBalance (account) {
    return account.balance;
};

deposit(account, 1000);

console.log(getBalance(account));

withdraw(account, 250);

console.log(getBalance(account));