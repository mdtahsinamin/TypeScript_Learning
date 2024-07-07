{
  //

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
    public getBalance() {
      return this._balance;
    }
  }
  class StudentAccount extends BankAccount {}

  const goribManusherAccount = new BankAccount(113, "Mr. gorib", 20);
  goribManusherAccount.addDeposit(12);
  console.log(goribManusherAccount.getBalance());

  /**
   *
   * private  use korle instance use korte pari na , class block a use korte pari
   * if we want use in another class that inherited parent class we use protected
   */
}
