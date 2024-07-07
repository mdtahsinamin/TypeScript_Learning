{
  // union type
  // string literal type
  //type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  // type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";

  // type Developer = FrontendDeveloper | FullStackDeveloper;

  // const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+";
  };

  const myDetails: User = {
    name: "Tahsin",
    email: "tahsin16@cse.pstu.ac.bd",
    gender: "male",
    bloodGroup: "O+",
  };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
  
  const fulStackDeveloper: FullStackDeveloper = {
    skills: ["React", "Node", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
