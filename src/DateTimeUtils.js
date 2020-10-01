export const getFirstDayOfMonth = function (d) {
  const date = d ? new Date(d) : new Date();
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
};

export const addDays = function (d, days) {
  const date = d ? new Date(d) : new Date();
  date.setDate(date.getDate() + days);
  return date;
};

export const addMonths = function (d, months) {
  const date = d ? new Date(d) : new Date();
  date.setMonth(date.getMonth() + months);
  return date;
};
