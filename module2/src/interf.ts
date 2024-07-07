{
  // interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  const user: User2 = {
    name: "M",
    age: 100,
  };

  // using type
  type UserWithRole = User1 & { role: string };

  // for interface use extends
  interface UserWithRole1 extends User2 {
    role: string;
  }

  const user1: UserWithRole1 = {
    name: "M",
    age: 100,
    role: "student",
  };

  // For every primitive data type we use type alias
  // example type RollNumber = number;

  // For object use type alias, interface

  type Roll = number[];

  interface Roll1 {
    [index: number]: number;
  }

  const RollNumber: Roll1 = [1, 2, 3, 4];

  type Add = (num: number, num1: number) => number;

  interface Add1 {
    (num: number, num1: number): number;
  }

  const add: Add1 = (num, num1) => num + num1;

  //
}
