const addUserAction = (user) => ({ type: "addUser", payload: user });
const removeUserAction = (id) => ({ type: "removeUser", payload: id });

export { addUserAction, removeUserAction };
