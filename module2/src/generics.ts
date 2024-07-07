{
  // ! Generics type

  type GenericsArray<T> = Array<T>;

  //const rollNumber: number[] = [1, 2, 3, 4, 5, 6];
  const rollNumber: GenericsArray<number> = [1, 2, 3, 4, 5, 6];

  //const mentors: string[] = ["Mr.x", "Mr.Y", "Mr.z"];
  const mentors: GenericsArray<string> = ["Mr.x", "Mr.Y", "Mr.z"];

  // const boolArr: boolean[] = [true, false, true];
  const boolArr: GenericsArray<boolean> = [true, false, true];

  const add = (x: number, y: number): number => x + y;

  add(30, 20);

  const user: GenericsArray<{ name: string; age: number }> = [
    { name: "Tahsin", age: 100 },
    { name: "Tanzir", age: 100 },
    { name: "Tanvir", age: 100 },
    { name: "Jhankar", age: 100 },
  ];

  // Generics tuple
  type GenericTuple<X, Y> = [X, Y];
  const human: GenericTuple<string, string> = ["Mr.X", "Mr.Y"];

  const userWithId:GenericTuple<number, {name: string, email: string}>  = [1802054, { name: "Tahsin", email: "a@gmail.com" }];

  /**
   *
   * Shift + up-arrow
   * Alt + Shift + down-arrow
   */
}
