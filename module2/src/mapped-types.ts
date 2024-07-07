{
  // mapped typed

  const arrOfNumber: Number[] = [1, 4, 5, 9];
  //const arrOfString : string[] = ['1']

  const arrayOfString: string[] = arrOfNumber.map((elt) => elt.toString());
  console.log(arrayOfString);

  type Area = {
    height: number;
    weight: number;
  };

  // we want to declare Area type in string

  //   type AreaString = {
  //     [key in "height" | "width"]: string;
  //   };

  // lookup type
  type Height = Area["height"];

  // T ->   height: "string"; width: number }
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "1",
    width: 50,
  };
}
