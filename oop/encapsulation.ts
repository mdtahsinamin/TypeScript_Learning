{
  /**
   * Abstraction
   * Encapsulation
   * Inheritance
   * Polymorphism
   *
   */

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    private _getBalance() {
      return this._balance;
    }
    getHiddenMethod() {
      return this._getBalance();
    }
  }
  class StudentAccount extends BankAccount {
    test() {}
  }

  const goribManusherAccount = new BankAccount(113, "Mr. gorib", 20);
  goribManusherAccount.addDeposit(12);
  console.log(goribManusherAccount.getHiddenMethod());
}
