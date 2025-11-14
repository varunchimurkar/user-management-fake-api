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
  try {
    return await request(api);
  } catch (error) {
    throw error;
  }
};

/* Fetch All User By id */
export const fetchUserById = async (id) => {
  try {
    return await request(`${api}/${id}`);
  } catch (error) {
    throw error;
  }
};

/*Create New User */
export const createUser = async (data) => {
  try {
    return await request(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw error;
  }
};

/*Edit-Update User */
export const updateUser = async (id, data) => {
  try {
    return await request(`${api}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw error;
  }
};

/*Delete User */
export const deleteUser = async (id) => {
  try {
    return await request(`${api}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw error;
  }
};
