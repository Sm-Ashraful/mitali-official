export const initialState = {
  showModal: false,
  isSidebarOpen: false,
  isDropdownMenuOpen: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setShowModal":
      return {
        ...state,
        showModal: action.item,
      };
    case "setSidebar":
      return {
        ...state,
        isSidebarOpen: action.item,
      };

    case "setDropdownOpen":
      return {
        ...state,
        isDropdownMenuOpen: action.item,
      };

    default:
      return state;
  }
};

export default reducer;
