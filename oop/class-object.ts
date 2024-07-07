{
  // oop

  class Animal {
    //public name: string;
    //public species: string;
    //public sound: string;

    // Parameter properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makesSound() {
      // normal function use korte hobe
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard Bhai", "Dog", "Ghew Ghew");
  const cat = new Animal("Persian bhai", "cat", "Meow");
  dog.makesSound();
}
