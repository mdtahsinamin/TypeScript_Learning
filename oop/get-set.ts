{
  // getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    // getter
    get balance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(113, "Mr. gorib", 50);

  goribManusherAccount.deposit = 50;
  const myBalance = goribManusherAccount.balance; // property er mto kore
  console.log(myBalance);

  /**
   *
   * getter/setter define kori function moto but use kori property moto
   *
   *
   */
}
