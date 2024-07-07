{
  // constraints -> fix kore doa.
  // Je param ami receive kori o type jeno fix type gula extand kore ja amder paite e hobe
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 123,
    name: "Mr.x",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 124,
    name: "Mr.x",
    email: "x@gmail.com",
    hasWatch: "APPle",
  });
}
