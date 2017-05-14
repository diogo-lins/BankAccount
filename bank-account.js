var accounts = [];

function creatAccount(account) {
    accounts.push(account);
    return account;
}

function getAccount(username) {
    var matchedAccount;

    accounts.forEach(
        function (account) {
            if (account.username === username) {
                matchedAccount = account;
            }
        }
    )

    return matchedAccount;
}

function deposit (account, amount) {
    account.balance += amount;
};

function withdraw (account, amount) {
    account.balance -= amount;
};

function getBalance (account) {
    return account.balance;
};

var andrewsAccount = creatAccount(
    {
        username: 'Andrew',
        balance: 0
    }
)

deposit(andrewsAccount, 1000);
console.log(getBalance(andrewsAccount));
console.log(accounts);