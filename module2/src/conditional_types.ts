{
  // conditional type

  type a = number;
  type b = string;

  type x = a extends null ? true : false;

  type y = a extends null ? true : b extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  // car, bike, ship

  type checkVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasTractor = checkVehicle<"tractor">;
}
