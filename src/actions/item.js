export const CHANGE_AMOUNT = "CHANGE_AMOUNT";

export const changeAmount = (id, item) => ({
  type: CHANGE_AMOUNT,
  item,
  id
});