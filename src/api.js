const api = "https://jsonplaceholder.typicode.com/users";

const request = async (url, options = {}) => {
const respose = await fetch(url, options);

  if (!respose.ok) {
    throw new Error("API ERROR");
  }
  return respose.json();
};

/*Fetch All User */
export const fetchUser = async () => {
  return await request(api);
};

/* Fetch All User By id */
export const fetchUserById = async (id) => {
  return await request(`${api}/${id}`);
};

/*Create New User */
export const createUser = async (data) => {
  return await request(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/*Edit-Update User */
export const updateUser = async (id, data) => {
  return await request(`${api}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/*Delete User */
export const deleteUser = async (id) => {
  return await request(`${api}/${id}`, {
    method: "DELETE",
  });
};
