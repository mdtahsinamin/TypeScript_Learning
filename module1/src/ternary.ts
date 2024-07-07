{
  // ternary operator || optional Changing || nullish coalescing operator
  const age: number = 18;

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  // nullish coalescing operator ??

  // null / undefined -> decision making

  const isAuthenticated = undefined;

  const result = isAuthenticated ?? "Guest";

  const result1 = isAuthenticated ? isAuthenticated : "Guest";

  console.log({ result1 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const myDetails: User = {
    name: "Tahsin",
    address: {
      city: "ctg",
      road: "road",
      presentAddress: "ctg town",
    },
  };

  const permanentAddress =
    myDetails?.address?.permanentAddress ?? "Not permanentAddress";

  console.log({ permanentAddress });
}
