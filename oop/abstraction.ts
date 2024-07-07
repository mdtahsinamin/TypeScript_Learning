{
  // abstraction -> get a idea not understand implement
  // abstraction -> 1. interface 2. abstract
  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   const vehicle1: Vehicle1 = {
  //     name: "Toyota",
  //     model: 2000,
  //   };

  // if class follow types use implements keyword, real implementation
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log("I am start the car engine");
    }
    stopEngine(): void {
      console.log("I am stop the car engine");
    }
    move(): void {
      console.log("I am moving");
    }
    test() {
      console.log("Testing..");
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();

  // abstract class
  // we can follow the abstract class but we can't create an instance
  abstract class Car1 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("I am testing");
    }
  }

  class Toyota extends Car1 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving the car");
    }
  }

  const hondaCar = new Toyota();
  hondaCar.startEngine();
}
