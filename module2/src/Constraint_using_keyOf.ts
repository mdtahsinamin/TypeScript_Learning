{
  // Generic constraints with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "Car" | "Ship" // manually

  // akta type ar key gula a dia string literal ar union type create korbo -> easily keyof use korte pari 

  type Owner1 = keyof Vehicle;

  const person1: Owner1 = "bike";


  const getPropertyValue = <X, Y extends keyof X >(obj: X, key : Y) =>{
    return obj[key]
  }

  const user = {
    name: "Mr. Persian",
    age: 25,
    address : 'ctg'
  }





}
