{
  // utility type

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type NameAge = Pick<Person, "name" | "age">;

  // omit bad

  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  // Partial

  type PersonPartial = Partial<Person>;

  // Read only

  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "Mr.x",
    age: 200,
    contactNo: "017",
  };
  //person1.name = "Mr. y";

  // Record type

  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  const EmptyObj: Record<string, unknown> = {};
}
