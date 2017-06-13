const initState = {
  dailyCustomers: [],
};

const customerInfo = (state = initState, action) => {
  switch (action.type) {
    case 'GET_DAILY_CUSTOMERS':
      return Object.assign({}, state, { dailyCustomers: action.dailyCustomers });
      break;
    default:
      return state;
  }
};

export default customerInfo;
