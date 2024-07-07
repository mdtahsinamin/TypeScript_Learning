{
  // Reference type --> Object
  // require dore nibe
  const user: {
    firstName: string;
    middleName: string;
    lastName: string;
  } = {
    firstName: "Md",
    middleName: "Tahsin",
    lastName: "Amin",
  };

  // optional - > ?

  const user1: {
    firstName: string;
    middleName?: string;
    lastName: string;
  } = {
    firstName: "Md",
    lastName: "Amin",
  };

  //  Literal Types -> value as type hisabe define kori -> always fixed
  const user2: {
    company: "Programming Hero";
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Programming Hero",
    firstName: "Md",
    lastName: "Amin",
    isMarried: false,
  };

  // read only access modifier
  const user3: {
    readonly company: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Programming Hero",
    firstName: "Md",
    lastName: "Amin",
    isMarried: false,
  };


}
