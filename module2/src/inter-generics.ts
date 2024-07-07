{
  //

  type Generic<T> = Array<T>;

  // type or interface

  interface User {
    name: string;
    age: number;
  }

  const users: Generic<User> = [
    { name: "Tarit", age: 80 },
    { name: "Nazmul", age: 75 },
    { name: "Anik", age: 39 },
  ];

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface EmilabWatch {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Persian",
    computer: {
      brand: "Asus",
      model: "X-255UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface BikeDetails {
    model: string;
  }

  const richDeveloper: Developer<AppleWatch, BikeDetails> = {
    name: "Rich Dev",
    computer: {
      brand: "MAC",
      model: "M2-Chip",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "Something",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: " TVS Radeon",
    },
  };
}

/**
 *
 *
 * * shift +  right-arrow / left-arrow
 */
