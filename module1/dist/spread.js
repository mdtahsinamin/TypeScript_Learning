"use strict";
{
    // spread operator
    // rest operator
    const bros = ["Mr", "Tahsin", "Amin"];
    const bros_1 = ["Miss", "Aysha", "Khushi"];
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
    // learn rest operator --> single element nia array
    const greetFridens = (...friends) => {
        friends.forEach((friend) => {
            console.log(`Hi ${friend}`);
        });
    };
    greetFridens("Abul", "Kabul", "babul");
}
