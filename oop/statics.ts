{
  // statics fole memory change hoy na
  // static use korle this use korte parbo na
  // class ar nam dore access korte hobe

  class Counter {
    static count: number = 0;

    static increment() {
      return (Counter.count = Counter.count + 1);
    }

    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  const instance1 = new Counter();

  console.log(Counter.increment());

  const instance2 = new Counter();
  console.log(Counter.increment()); // 1 -> different memory te

  const instance3 = new Counter();
  console.log(Counter.increment());
}
