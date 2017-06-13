export function getCustomers(dailyCustomers) {
  return {
    type: 'GET_DAILY_CUSTOMERS',
    dailyCustomers,
  };
}
