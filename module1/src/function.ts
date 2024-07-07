{
  function getMyName(name: string): string {
    return name;
  }

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(2, 3);

  const addMy = (num: number, num1: number): number => {
    return num + num1;
  };

  // object -> function -> method

  const poorUser = {
    name: "Tahsin",
    balance: 0,
    addBalance(balance: number): string {
      return `My balance is ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 2, 4, 10];

  const newArr: number[] = arr.map((elt: number): number => elt * elt);
}
