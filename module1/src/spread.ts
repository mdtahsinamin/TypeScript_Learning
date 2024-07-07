{
  // spread operator
  // rest operator

  const bros: string[] = ["Mr", "Tahsin", "Amin"];
  const bros_1: string[] = ["Miss", "Aysha", "Khushi"];
  bros_1.push(...bros);

  // object

  const mentor = {
    typescript: "Mezb",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentor1 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentor,
    ...mentor1,
  };

  // learn rest operator --> single element nia array create

  const greetFridens = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      console.log(`Hi ${friend}`);
    });
  };

  greetFridens("Abul", "Kabul", "babul");
}
