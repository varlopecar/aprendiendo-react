const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  console.log(data);
  return data;
};

export default getUsers;
