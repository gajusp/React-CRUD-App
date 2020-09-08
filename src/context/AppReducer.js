export default (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [action.payload, ...state.users],
      };

    case 'EDIT_USER':
      const updatedUser = action.payload;

      const updateUser = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        }
        return user;
      });

      return {
        ...state,
        users: updateUser,
      };

    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};
