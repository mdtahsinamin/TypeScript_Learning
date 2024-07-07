{
  //

  // type assertion -> ami developer hisabe ts thake better  type declare korte pari setai assertion.
  // Mane ami typescript bujia dibo asole ata ki type ar data.
  // as
  let anything: any;
  anything = "Next Level web Development";
  anything = 222;

  // (anything as number).

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value);
      return `The converted value is : ${convertedValue * 1000}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result = kgToGm(1000) as number;
  const result1 = kgToGm("1000") as string;

  console.table({ result, result1 });

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
