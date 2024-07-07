// destructuring from array and object

const user = {
  id: 345,
  name: {
    firstName: "Md.",
    middleName: "Tahsin",
    lastName: "Amin",
  },
  contactNo: "0178956236",
  address: "Bangladesh",
};

// destructuring : name alias

const {
  contactNo,
  name: { middleName: midName },
} = user;

const myFriends = ["Abdur", "Tahsin", "Tanvir", "Tanzir", "monica"];

// if don't use a and b
const [, , best, ...rest] = myFriends;
