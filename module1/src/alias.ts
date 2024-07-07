{
  // type alias
  //
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student: Student = {
    name: "Tahsin",
    age: 24,
    gender: "Male",
    contactNo: "017870222222",
    address: "Dhaka",
  };

  const student1: Student = {
    name: "Amin",
    age: 24,
    gender: "Male",
    address: "Dhaka",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const username: UserName = "Tanzir";
  const isAdmin: IsAdmin = false;

  
  //type AddFn = number;
  type AddFn = (num1: number, num2: number) => number;

  const add: AddFn = (num1: number, num2: number) => num1 + num2;
}
