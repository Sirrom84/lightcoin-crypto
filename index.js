


class Account {

  constructor(username) {
    this.username = username;
    this.balance = 1000.00;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

// DRIVER CODE BELOW

const myAccount = new Account('Sirrom84');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(1000.00, myAccount);
t1.commit();
console.log(`New deposit:`, t1.amount);
console.log(`Updated Balance:`, myAccount.balance)
const t2 = new Withdrawal(160.00, myAccount);
t2.commit();
console.log('Ending Balance:', myAccount.balance);
