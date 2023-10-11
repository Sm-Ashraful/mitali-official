export const initialState = {
  showModal: false,
  isSidebarOpen: false,
  isDropdownMenuOpen: false,
  contactInfo: {
    name: "",
    phone: "",
    email: "",
    category: "",
    company: "",
    message: "",
  },
  meetingInfo: {
    selectedDate: "",
    selectedTime: "",
    selectedTimeZone: "",
    fname: "",
    phone: "",
    email: "",
    topic: "",
    guestEmail: "",
  },
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
    case "setContactInfo":
      return {
        ...state,
        contactInfo: action.item,
      };

    case "setMeetingInfo":
      return {
        ...state,
        meetingInfo: action.item,
      };

    default:
      return state;
  }
};

export default reducer;
