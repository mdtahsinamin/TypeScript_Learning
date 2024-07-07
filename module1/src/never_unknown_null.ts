{
  // nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is noting to search");
    }
  };

  searchName(null);

  // unknown type -> runtime a gia jante pari
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value == "number") {
      const converted = (value * 1000) / 3600;
      console.log(`The speed is ${converted} ms^-1`);
    }
    if (typeof value == "string") {
      const valueInNumber = parseInt(value.split(" ")[0]);
      const converted = (valueInNumber * 1000) / 3600;
      console.log(`The speed is ${converted} ms^-1`);
    } else {
      console.log("Wrong input");
    }
  };

  getSpeedInMeterPerSecond(`1000 kmh^-1`);

  // never type
  // this function don't return any type so it is never
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("Muskil se error hogaya");
}
