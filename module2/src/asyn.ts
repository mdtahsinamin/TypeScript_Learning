{
  //

  type User = { name: string; age: number };
  const createPromise = (): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
      const data: User = { name: "Tahsin", age: 24 };

      if (data) {
        resolve(data);
      } else {
        reject("What is happened");
      }
    });
  };

  const showData = async (): Promise<User> => {
    const data: User = await createPromise();
    return data;
  };

  showData().then((res) => {
    console.log(res);
  });

  // fetch

  type MyTODO = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getUser = async (): Promise<MyTODO> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data: MyTODO = await response.json();

    return data;
  };

  getUser().then((res) => {
    console.log(res);
  });
}
