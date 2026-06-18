export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

export const setCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};
export const updateUser = (updatedUser) => {
  const users = getUsers();

  const updatedUsers = users.map((user) =>
    user.email === updatedUser.email
      ? updatedUser
      : user
  );

  saveUsers(updatedUsers);

  setCurrentUser(updatedUser);
};