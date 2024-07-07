{
  // function with Generics

  const createArray = (param: string = "Hello", param2?: string): string[] => {
    return [param];
  };

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  const rest1 = createArrayWithGenerics<string>("Bangladesh");

  interface User {
    id: number;
    name: string;
  }

  const resGenericObj = createArrayWithGenerics<User>({
    id: 123,
    name: "Mr. Tanzir",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const rest2 = createArrayWithTuple<string, number>("Bangladesh", 25);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr.x",
    email: "x@gmail.com",
    devType: "NLWD",
  });
}
