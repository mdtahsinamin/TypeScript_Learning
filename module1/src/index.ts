{
  /**
   *  Primitive data type in ts
   * * number
   * * string
   * * boolean
   * * null
   * * undefined
   * * symbol
   *
   * Non Primitive Data type
   * * Array
   * * Tuple
   * * object
   */

  let firstName: string = "Tahsin";

  // if ts assume/ infer the data type, its call implicit data type
  // if we declare the data tye, its call explicit data type

  let rollNumber: number = 1802054;

  let isAdmin: boolean = true;

  let x: undefined = undefined;

  let y: null = null;

  let d: number;
  d = 1523;

  // Array

  let friends: string[] = ["rachel", "monica"];
  friends.push("tanzir");
  let eligibleRolList: number[] = [1, 2, 3];

  eligibleRolList.push(5);

  // tuple -> array -> order -> type of values

  let coordinates: [number, number] = [1, 5];
  let ageName: [number, string, boolean] = [50, "Mr.X", true];

  // array

  let universityFriends: string[] = ["Tarit", "Nazmul", "Shifar", "Jamiul"];
  let rollWiseFriends: number[] = [1802009, 1802030, 1802007, 1802048];

  // tuples
  type tu = [boolean, number, boolean];
  let habit: tu = [true, 5, true];
}
