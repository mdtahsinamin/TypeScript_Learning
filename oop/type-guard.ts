{
  // Type Guards

  // typeof --> type Guards -> runtime a kaj kore

  type Alphanemuric = string | number;

  const add = (param: Alphanemuric, param1: Alphanemuric): Alphanemuric => {
    if (typeof param === "number" && typeof param1 === "number") {
      return param + param1;
    } else {
      return param.toString() + param1.toString();
    }
  };

  // in guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };
  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. normal",
  };

  const adminUser: AdminUser = {
    name: "Mr. AdminUser",
    role: "admin",
  };
  getUser(normalUser);
}
